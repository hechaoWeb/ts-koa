export interface RedisConfig {
  port: number;
  host: string;
  password?: string;
  db: number;
}