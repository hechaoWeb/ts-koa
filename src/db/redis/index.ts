import { config } from '../../config/index';
import { Redis } from './Redis';

export const redisClient = new Redis(config.get('redis'));