import { redis } from "@/config/config.json";
import Queue from "bull";

const mailQueue = new Queue("mail processing", {
  redis: { port: redis.port, host: redis.host },
});

mailQueue.process(function (job) {
  job.queue;
});
