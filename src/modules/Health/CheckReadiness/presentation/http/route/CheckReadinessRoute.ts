import type {
    FastifyInstance,
} from 'fastify';

import type { CheckReadinessHandler } from '../handler/CheckReadinessHandler.js';
import type { CheckReadinessResponse } from '../response/CheckReadinessResponse.js';
import { CheckReadinessSchema } from '../schema/CheckReadinessSchema.js';

interface CheckReadinessRoute {
    Reply: CheckReadinessResponse;
}

export interface RegisterCheckReadinessRouteOptions {
    handler: CheckReadinessHandler;
}

export function registerCheckReadinessRoute(
    app: FastifyInstance,
    options: RegisterCheckReadinessRouteOptions,
): void {
    app.get<CheckReadinessRoute>(
        '/health/ready',
        {
            schema:
                CheckReadinessSchema,
        },
        options.handler.handle,
    );
}