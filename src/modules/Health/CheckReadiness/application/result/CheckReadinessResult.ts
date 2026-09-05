export interface CheckReadinessResult {
    status: 'ready';
    checks: {
        database: 'up';
    };
    timestamp: Date;
}