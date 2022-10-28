import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;

  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  // if (foundToken) {
  //   //토큰 존재
  //   const foundCount = await client.token.count({
  //     where: {
  //       userId: foundToken.userId,
  //     },
  //   });
  //   // 토큰이 많이 생성 되어있을 때.
  //   if (foundCount > 2) {
  //     // 방금 생성된 토큰을 제외한 나머지 삭제.
  //     await client.token
  //       .deleteMany({
  //         where: {
  //           userId: foundToken.userId,
  //           createdAt: { notIn: foundToken.createdAt },
  //         },
  //       })
  //       .then(
  //         (res) => {
  //           console.log(res);
  //         },
  //         (err) => {
  //           if (err) console.log(err);
  //         }
  //       );
  //   }
  // }
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
