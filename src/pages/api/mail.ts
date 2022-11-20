import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, message } = req.body;
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid
      .send({
        to: email, // Your email where you'll receive emails
        from: "kevin.mallari@gmail.com", // your website email address here
        subject: `Inquiry to Kevin Mallari`,
        text: `Name: ${name} Email: ${email} Message: ${message}`,
        html: `
        <p>Hi, ${name}!</p>
        <p>Thanks for reaching out. This message is a receipt that I've received your message. I'll get back to you as soon as a I can!</p>
        <p>Here's a copy of your message:</p>
        <p style="white-space: pre; padding-left: 1.5em; border-left: 2px solid gray;">${message}</p>
        <hr />
        <div
          style="display: flex; flex-direction: row; font-family: Palatino; align-items: center; padding-top: 1em;"
        >
          <img
            src="https://i.imgur.com/paxdNtu.png"
            alt="me"
            width="120"
            height="120"
            style="border: 1px solid white; border-radius: 50%; outline: 1px solid #2B59C3"
          />
          <div style="display: flex; flex-direction: column; gap: 1em; margin-left: 1.5em">
            <div>
              <h2 style="margin: 0">Kevin Mallari</h2>
              <h3 style="margin: 0">Full Stack Software Engineer</h3>
              <a style="margin: 0" href="https://kevmallari.com">www.kevmallari.com</a>
              <p style="margin: 0">kevin.mallari@gmail.com | +63 917 755 6239</p>
              <div style="display: flex; align-items: end; gap: 0.5em; margin: 0;"><a href="https://github.com/kmallari" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width="20" height="20" /></a><a style="margin-left: 1em" href="https://www.linkedin.com/in/kevin-luis-mallari-a4364719a/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" width="20" height="20" /></a></div>
            </div>          
          </div>
        </div>
        `,
      })
      .then((data) => {
        console.log("data", data);
      });
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
