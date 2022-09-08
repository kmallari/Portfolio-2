import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
console.log("YOYOYOY", process.env.SENDGRID_API_KEY);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "kevin.mallari@gmail.comp", // Your email where you'll receive emails
      from: "kevin.mallari@gmail.com", // your website email address here
      subject: `YOYOYO`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
