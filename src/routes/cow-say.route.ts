import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

export const cowSayRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/:message",
    {
      schema: {
        params: z.object({
          message: z.string(),
        }),
      },
    },
    (req, res) => {
      const { message } = req.params;

      res.send({
        message: `🐄 ${message}`,
      });
    }
  );
};
