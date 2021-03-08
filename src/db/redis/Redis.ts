import redis from 'ioredis';
import { RedisConfig } from './type';

export class Redis {

  redisClient: any;

  constructor(config: RedisConfig) {
    this.redisClient = new redis(config);
  }

}