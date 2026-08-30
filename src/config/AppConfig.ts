export interface AppConfig {
  port: number;
  version: string;
}

export const appConfig = {
  port: 3000,
  version: '1.0.0',
} as const satisfies AppConfig;
