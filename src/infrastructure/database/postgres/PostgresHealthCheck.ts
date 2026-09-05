import type { Pool } from 'pg';

export class PostgresHealthCheck {
  constructor(private readonly pool: Pool) {}

  async check(): Promise<void> {
    await this.pool.query('SELECT 1');
  }
}
