export interface CheckReadinessResponse {
    status: 'ready';
    checks: {
        database: 'up';
    };
    timestamp: string;
}