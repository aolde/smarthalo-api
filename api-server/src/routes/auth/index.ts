import { FastifyInstance } from "fastify";
import AuthController from "../../controllers/auth";

export default async function (fastify: FastifyInstance, options: any) {
  fastify.post("/local/signup", { preValidation: [] }, AuthController.signup);
  // fastify.post("/local/login", { preValidation: [] }, AuthController.login);
  // fastify.post("/local/checkEmail", { preValidation: [] }, AuthController.checkEmail);
  // fastify.post("/local/refresh_tokens", { preValidation: [] }, AuthController.refreshTokens);
  // fastify.post("/forgot", { preValidation: [] }, AuthController.forgot);
}
