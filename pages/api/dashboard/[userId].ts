// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Client, credentials} from '@grpc/grpc-js'
import {hello} from '../../../proto/hello-service';
import {docs} from '../../../proto/docs';

type Data = { [k: string]: any; }

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userId } = req.query;

  const helloPromise = new Promise<hello.HelloResponse | undefined>((resolve) => {
    helloClient.makeUnaryRequest<hello.HelloRequest, hello.HelloResponse>(
      '/hello.HelloService/Hello',
      req => Buffer.from(hello.HelloRequest.encode(req).finish()),
      buffer => {
        return hello.HelloResponse.decode(buffer);
      },
      hello.HelloRequest.fromObject({ name: userId }),
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
      (err, response: docs.DocsResponse | undefined) => {
        if (err) {
          console.log(err);
        }

        resolve(response);
      }
    )
  });

  const [helloResponse, docsResponse] = await Promise.all([helloPromise, docsPromise]);

  res.status(200).json({
    greeting: helloResponse ? helloResponse.message : 'MY LEG!',
    documents: docsResponse ? docsResponse.documents : [],
  });
}
