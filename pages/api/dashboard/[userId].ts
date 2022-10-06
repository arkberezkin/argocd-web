// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {IncomingHttpHeaders} from 'http2';
import type { NextApiRequest, NextApiResponse } from 'next'
import {Client, credentials, Metadata} from '@grpc/grpc-js'
import {createClient, RedisClientType} from 'redis';

import {hello} from '../../../proto/hello-service';
import {docs} from '../../../proto/docs';

const helloClient = new Client(
  process.env.NODE_ENV === 'production' ?
    'argocd-helm-example-service.argocd-helm-example-service.svc.cluster.local:80' :
    '0.0.0.0:9000',
  credentials.createInsecure(),
)

const docsClient = new Client(
  process.env.NODE_ENV === 'production' ?
    'argocd-docs-service.argocd-docs-service.svc.cluster.local:80' :
    '0.0.0.0:9001',
  credentials.createInsecure(),
)

let redisClient: RedisClientType | undefined;

const tracingHeaders = [
  'x-request-id',
  'x-b3-traceid',
  'x-b3-spanid',
  'x-b3-parentspanid',
  'x-b3-sampled',
  'x-b3-flags ',
];

const getRedisClient = async (): Promise<RedisClientType> => {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.NODE_ENV === 'production' ?
        'redis://redis-web.argocd-docs-service.svc.cluster.local:6379' :
        undefined,
    });
    await redisClient.connect();
  }

  return redisClient
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { userId } = req.query;
  const headerValues = req.headers;
  const tracingValues = Object.fromEntries(
    tracingHeaders.map((hkey) => {
      return [hkey, headerValues[hkey]];
    })
  );

  const traceId = tracingValues['x-b3-traceid'];

  if (traceId) {
    res.setHeader('x-request-id', traceId);
  }

  const redis = await getRedisClient();

  if (!userId || Array.isArray(userId)) {
    res.status(400);
    return;
  }

  const cached = await redis.get(userId);


  if (cached) {
    console.log('Using cached value');
    res.status(200).json(JSON.parse(cached));
    return;
  }

  const helloPromise = new Promise<hello.HelloResponse | undefined>((resolve) => {
    helloClient.makeUnaryRequest<hello.HelloRequest, hello.HelloResponse>(
      '/hello.HelloService/Hello',
      req => Buffer.from(hello.HelloRequest.encode(req).finish()),
      buffer => {
        return hello.HelloResponse.decode(buffer);
      },
      hello.HelloRequest.fromObject({ name: userId }),
      Metadata.fromHttp2Headers(tracingValues),
      (err, response: hello.HelloResponse | undefined) => {
        if (err) {
          console.log(err);
        }

        resolve(response);
      }
    )
  });

  const docsPromise = new Promise<docs.DocsResponse | undefined>((resolve) => {
    docsClient.makeUnaryRequest<docs.DocsRequest, docs.DocsResponse>(
      '/docs.DocsService/Documents',
      req => Buffer.from(docs.DocsRequest.encode(req).finish()),
      buffer => {
        return docs.DocsResponse.decode(buffer);
      },
      docs.DocsRequest.fromObject({ userId }),
      Metadata.fromHttp2Headers(tracingValues),
      (err, response: docs.DocsResponse | undefined) => {
        if (err) {
          console.log(err);
        }

        resolve(response);
      }
    )
  });

  const [helloResponse, docsResponse] = await Promise.all([helloPromise, docsPromise]);

  const response = {
    greeting: helloResponse ? helloResponse.message : 'MY LEG!',
    documents: docsResponse ? docsResponse.documents : [],
  };

  await redis.set(userId, JSON.stringify(response));

  res.status(200).json(response);
}
