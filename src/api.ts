import { Server } from './app/Server.js';
import { appConfig } from './config/AppConfig.js';
import { logger } from './infrastructure/logging/Logger.js';

Server.instance.start(appConfig.port, appConfig.host).catch((error: unknown) => {
  logger.fatal({ err: error }, 'Failed to start server');
  process.exit(1);
});
