import { redisClient } from '../db/redis/index';

export default class DbCacheAccessor {
  constructor(protected redis = redisClient) {}
}