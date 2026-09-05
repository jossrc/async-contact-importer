import type {
    FastifySchema,
  } from 'fastify';
  
  export const CheckReadinessSchema = {
    response: {
      200: {
        type: 'object',
        additionalProperties: false,
        required: [
          'status',
          'checks',
          'timestamp',
        ],
        properties: {
          status: {
            type: 'string',
            enum: ['ready'],
          },
          checks: {
            type: 'object',
            additionalProperties: false,
            required: [
              'database',
            ],
            properties: {
              database: {
                type: 'string',
                enum: ['up'],
              },
            },
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
    },
  } as const satisfies FastifySchema;