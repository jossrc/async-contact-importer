import type { FastifyInstance } from 'fastify';
import { buildApp } from './BuildApp.js';

export class Server {
  private static _instance: Server | undefined;
  private readonly app: FastifyInstance;

  private constructor() {
    this.app = buildApp();
  }

  static get instance(): Server {
    if (!Server._instance) {
      Server._instance = new Server();
    }

    return Server._instance;
  }

  async start(port: number, host: string): Promise<void> {
    await this.app.listen({ port, host });
  }
}
