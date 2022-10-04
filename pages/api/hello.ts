// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Client, credentials, Metadata} from '@grpc/grpc-js'
import {hello} from '../../proto/hello-service';

type Data = { [k: string]: any; }

const client = new Client(
  process.env.NODE_ENV === 'production' ?
    'argocd-helm-example-service.argocd-helm-example-service.svc.cluster.local:80' :
    '0.0.0.0:9000',
  credentials.createInsecure(),
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const helloResponse = await new Promise<hello.HelloResponse | undefined>((resolve) => {
    client.makeUnaryRequest<hello.HelloRequest, hello.HelloResponse>(
      '/hello.HelloService/Hello',
      req => Buffer.from(hello.HelloRequest.encode(req).finish()),
      buffer => {
        return hello.HelloResponse.decode(buffer);
      },
      hello.HelloRequest.fromObject({ name: 'Rune' }),
      (err, response: hello.HelloResponse | undefined) => {
        if (err) {
          console.log(err);
        }

        resolve(response);
      }
    )
  });

  res.status(200).json(helloResponse ? helloResponse.toJSON() : { message: 'MY LEG!'})
}
