import { z } from 'zod';

const nodeEnvironments = ['development', 'test', 'production'] as const;
const logLevels = ['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'] as const;

const databaseSchema = {
  DATABASE_URL: z
    .string({
      error: 'DATABASE_URL debe ser una cadena de texto',
    })
    .min(1, {
      error: 'DATABASE_URL no puede estar vacío',
    }),

  DATABASE_POOL_MAX: z.coerce
    .number()
    .int({
      error: 'DATABASE_POOL_MAX debe ser un número entero',
    })
    .positive({
      error: 'DATABASE_POOL_MAX debe ser un número positivo',
    })
    .default(10),

  DATABASE_CONNECTION_TIMEOUT_MS: z.coerce
    .number()
    .int({
      error: 'DATABASE_CONNECTION_TIMEOUT_MS debe ser un número entero',
    })
    .positive({
      error: 'DATABASE_CONNECTION_TIMEOUT_MS debe ser un número positivo',
    })
    .default(5000),

  DATABASE_IDLE_TIMEOUT_MS: z.coerce
    .number()
    .int({
      error: 'DATABASE_IDLE_TIMEOUT_MS debe ser un número entero',
    })
    .positive({
      error: 'DATABASE_IDLE_TIMEOUT_MS debe ser un número positivo',
    })
    .default(30000),
};

const serverSchema = {
  NODE_ENV: z
    .enum(nodeEnvironments, {
      error: `NODE_ENV debe ser uno de: ${nodeEnvironments.join(', ')}`,
    })
    .default('development'),

  HOST: z.string({ error: 'HOST debe ser una cadena de texto' }).default('0.0.0.0'),

  PORT: z.coerce
    .number({ error: 'PORT debe ser un número' })
    .int({ error: 'PORT debe ser un número entero' })
    .min(1, { error: 'PORT debe ser como mínimo 1' })
    .max(65535, { error: 'PORT no puede ser mayor que 65535' })
    .default(3000),

  LOG_LEVEL: z
    .enum(logLevels, {
      error: `LOG_LEVEL debe ser uno de: ${logLevels.join(', ')}`,
    })
    .default('info'),
};

// se combina sin crear nuevas propiedades
export const EnvironmentSchema = z.object({
  ...databaseSchema,
  ...serverSchema,
});
