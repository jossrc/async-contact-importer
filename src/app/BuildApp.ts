import fastify, { type FastifyBaseLogger, type FastifyInstance } from 'fastify';
import { registerModules } from './RegisterModules.js';
import { logger } from '../infrastructure/logging/Logger.js';
import { randomUUID } from 'node:crypto';

export function buildApp(): FastifyInstance {
  const app = fastify({
    loggerInstance: logger as FastifyBaseLogger,
    genReqId: () => randomUUID(),
  });

  registerModules(app);

  return app;
}
