import { Server } from './app/Server.js';
import { appConfig } from './config/AppConfig.js';

Server.instance.start(appConfig.port)
.then(() => {
  console.log(`Server is running on port ${appConfig.port}`);
})
.catch((error) => {
  console.error(error);
  process.exit(1);
});
