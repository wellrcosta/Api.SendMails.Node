import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { HealthCheck } from "@/routes/health-check-route";
import { SendMail } from "@/routes/send-mail-route";

const app = fastify({
  logger: true,
});

app.register(fastifyCors, {
  origin: "*",
});

app.register(HealthCheck);
app.register(SendMail);

app.listen({
  port: 3000 || process.env.PORT,
});
