import { FastifyInstance } from "fastify";
import auth from "./auth";
import v1 from "./v1";

export default async function (fastify: FastifyInstance, options: any) {
  await fastify.register(auth, Object.assign({}, options, { prefix: "auth" }));
  await fastify.register(async (fastify, options) => {
    await fastify.register(v1, Object.assign({}, options, { prefix: "v1" }));
  }, Object.assign({}, options, { prefix: "api" }));
}
