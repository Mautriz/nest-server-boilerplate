import { Module } from '@nestjs/common';
import { BpConfigService } from './config.service';

@Module({
	providers: [BpConfigService],
	exports: [BpConfigService],
})
export class BpConfigModule {}
