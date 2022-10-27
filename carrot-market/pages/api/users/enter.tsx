// import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

// const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  console.log(payload);
  /** 입력된 휴대폰 번호로 payload 문자 전송 */
  // if (phone) {
  //   const message = await twilioClient.messages.create({
  //     messagingServiceSid: process.env.SERVICE_SID,
  //     to: process.env.MY_PHONE!,
  //     body: `Your login token is ${payload}`,
  //   });
  //   console.log(message);
  // }
  return res.json({
    ok: true,
  });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
