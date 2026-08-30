import type { LoggerOptions } from 'pino';

export function createLoggerConfig(environment: string, logLevel: string): LoggerOptions {

    const isDevelopment = environment.toLowerCase() === 'development';
    const isTest = environment.toLowerCase() === 'test';

    return {
        level: isTest ? 'silent' : logLevel,
        redact: {
            paths: [
                'req.headers.authorization',
                'req.headers.cookie',
                'authorization',
                'password',
                'token',
                'accessToken',
                'refreshToken',
                'apiKey',
                'apiSecret',
                'apiToken',
                'apiKeyId',
                'apiKeySecret',
                'apiKeySecretKey',
                'apiKeySecretValue',
                'apiKeySecretKeyId',
                'apiKeySecretKeySecret',
            ],
            censor: '[REDACTED]'
        },
        ...(isDevelopment && {
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    translateTime: 'SYS:standard',
                    ignore: 'pid,hostname'
                }
            }
        })
    }

}



