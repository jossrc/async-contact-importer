import type { PostgresHealthCheck } from '../../../../infrastructure/database/postgres/PostgresHealthCheck.js';

import type { CheckReadinessResult } from './result/CheckReadinessResult.js';

export class CheckReadiness {
  constructor(
    private readonly postgresHealthCheck:
      PostgresHealthCheck,
  ) {}

  async execute(): Promise<CheckReadinessResult> {
    await this.postgresHealthCheck.check();

    return {
      status: 'ready',
      checks: {
        database: 'up',
      },
      timestamp: new Date(),
    };
  }
}