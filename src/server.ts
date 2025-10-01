import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { cowSayRoute } from "./routes/cow-say.route.ts";

import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/health", (_, reply) => {
  reply.send("OK");
});

app.register(cowSayRoute, { prefix: "/cow-say" });

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server running on port ${env.PORT}`);
});
