import mongoose from "mongoose";
import fastify, { RouteShorthandOptions } from "fastify";
import fastifyCors from "fastify-cors";
import fastifySensible from "fastify-sensible";
import routes from "./routes";

const PORT: string | number = process.env.PORT || 3000;
const MONGO_URL: string = process.env.MONGO_URL || 'mongodb://localhost:27017/shdb';

export default async function () {
  const server = fastify({
    ignoreTrailingSlash: true,
    trustProxy: true,
    logger: true
  });

  await mongoose.connect(MONGO_URL);

  await server.register(fastifyCors, { origin: "*" });
  await server.register(fastifySensible);
  await server.register(routes, {});

  try {
    await server.listen(PORT, '::');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}
