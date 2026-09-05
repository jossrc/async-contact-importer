import { Pool } from 'pg';
import { Environment } from '../../../config/environment/Environment.js';
import { logger } from '../../logging/Logger.js';

export const PostgresPool = new Pool({
  connectionString: Environment.DATABASE_URL,
  max: Environment.DATABASE_POOL_MAX,
  connectionTimeoutMillis: Environment.DATABASE_CONNECTION_TIMEOUT_MS,
  idleTimeoutMillis: Environment.DATABASE_IDLE_TIMEOUT_MS,
  application_name: 'async-contact-importer',
});

PostgresPool.on('error', (error) => {
  logger.error(
    {
      err: error,
    },
    'Error inesperado en el pool de PostgreSQL',
  );
});
