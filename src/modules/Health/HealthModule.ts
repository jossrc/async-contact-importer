import type { FastifyPluginAsync } from 'fastify';

import { appConfig } from '../../config/AppConfig.js';
import { PostgresHealthCheck } from '../../infrastructure/database/postgres/PostgresHealthCheck.js';
import { PostgresPool } from '../../infrastructure/database/postgres/PostgresPool.js';
import { CheckHealth } from './CheckHealth/application/CheckHealth.js';
import { CheckHealthHandler } from './CheckHealth/presentation/http/handler/CheckHealthHandler.js';
import { registerCheckHealthRoute } from './CheckHealth/presentation/http/route/CheckHealthRoute.js';
import { CheckReadiness } from './CheckReadiness/application/CheckReadiness.js';
import { CheckReadinessHandler } from './CheckReadiness/presentation/http/handler/CheckReadinessHandler.js';
import { registerCheckReadinessRoute } from './CheckReadiness/presentation/http/route/CheckReadinessRoute.js';

export const healthModule: FastifyPluginAsync = async (app): Promise<void> => {

    const checkHealth = new CheckHealth(appConfig.version);
    const checkHealthHandler = new CheckHealthHandler(checkHealth);

    const postgresHealthCheck = new PostgresHealthCheck(PostgresPool);
    const checkReadiness = new CheckReadiness(postgresHealthCheck);

    const checkReadinessHandler = new CheckReadinessHandler(checkReadiness);

    registerCheckHealthRoute(
      app,
      {
        handler: checkHealthHandler,
      },
    );

    registerCheckReadinessRoute(
      app,
      {
        handler: checkReadinessHandler,
      },
    );
  };