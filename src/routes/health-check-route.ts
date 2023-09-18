import { FastifyInstance } from "fastify";

export async function HealthCheck(app: FastifyInstance) {
  app.get("/health", async (_, reply) => {
    return reply.send({ response: "I'm alive!" });
  });
}
