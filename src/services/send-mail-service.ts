import { createTransport } from "nodemailer";
import { Mail } from "@/models/mail-model";
import { SMTP } from "@/config/config.json";

export async function MailService(
  from: string,
  to: string,
  subject: string,
  html: string
) {
  const MailOptions: Mail = { from, to, subject, html };

  const transporter = await createTransport({
    service: "gmail",
    auth: {
      user: SMTP.auth.user,
      pass: SMTP.auth.pass,
    },
  });

  await transporter.sendMail(MailOptions);
}
