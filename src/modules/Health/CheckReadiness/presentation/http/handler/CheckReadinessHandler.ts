import type { CheckReadiness } from '../../../application/CheckReadiness.js';

import type { CheckReadinessResponse } from '../response/CheckReadinessResponse.js';

export class CheckReadinessHandler {
  constructor(
    private readonly checkReadiness:
      CheckReadiness,
  ) {}

  readonly handle =
    async (): Promise<CheckReadinessResponse> => {
      const result =
        await this.checkReadiness.execute();

      return {
        status: result.status,
        checks: result.checks,
        timestamp:
          result.timestamp.toISOString(),
      };
    };
}