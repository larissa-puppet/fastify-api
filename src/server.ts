import { fastify } from "fastify";

import { env } from "./env.ts";

const app = fastify();

app.get("/health", (_, reply) => {
  reply.send("OK");
});

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server running on port ${env.PORT}`);
});
