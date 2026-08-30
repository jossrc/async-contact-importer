import pino from 'pino';

import { createLoggerConfig } from './LoggerConfig.js';

const environment = process.env.NODE_ENV ?? 'development';
const logLevel = process.env.LOG_LEVEL ?? 'info';

const loggerConfig = createLoggerConfig(environment, logLevel);

export const logger = pino(loggerConfig);
