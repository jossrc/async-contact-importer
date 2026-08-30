import fastify, { type FastifyInstance } from 'fastify';
import { registerModules } from './RegisterModules.js';

export function buildApp(): FastifyInstance {
  const app = fastify({
    logger: false,
  });

  registerModules(app);

  return app;
}
