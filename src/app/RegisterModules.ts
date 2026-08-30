import type { FastifyInstance } from 'fastify';
import { healthModule } from '../modules/Health/HealthModule.js';

export async function registerModules(
  app: FastifyInstance,
): Promise<void> {
  await app.register(
    async (api) => {
      await api.register(healthModule);
    },
    {
      prefix: '/api',
    },
  );
}