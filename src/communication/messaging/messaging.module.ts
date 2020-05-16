import { Module } from '@nestjs/common';
import { IoRedisService } from './io-redis.service';

@Module({
	providers: [IoRedisService],
	exports: [IoRedisService],
})
export class MessagingModule {}
