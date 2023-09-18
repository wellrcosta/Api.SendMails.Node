import { Mail } from "@/models/mail-model";
import { MailService } from "@/services/send-mail-service";
import { FastifyInstance } from "fastify";

export async function SendMail(app: FastifyInstance) {
  app.post("/mail", async (request, reply) => {
    const req: Mail | any = request.body;

    if (!req.from) return reply.status(400).send({ error: "Invalid request" });
    await MailService(req.from, req.to, req.subject, req.text);
  });
}
