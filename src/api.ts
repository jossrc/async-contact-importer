import { buildApp } from './app/BuildApp.js';
import { Server } from './app/Server.js';

import { PostgresHealthCheck } from './infrastructure/database/postgres/PostgresHealthCheck.js';
import { PostgresPool } from './infrastructure/database/postgres/PostgresPool.js';

const app = buildApp();

const postgresHealthCheck = new PostgresHealthCheck(PostgresPool);

const server = new Server(app, postgresHealthCheck);

server.registerShutdownSignals();

await server.start();
