import { Server } from './app/Server.js';
import { appConfig } from './config/AppConfig.js';

Server.instance.start(appConfig.port, appConfig.host)
.catch((error) => {
  console.error(error);
  process.exit(1);
});
