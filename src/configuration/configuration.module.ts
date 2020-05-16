import { Module } from '@nestjs/common';
import { BpLogger } from './logger/bp-logger.service';
import { BpTypegooseModule } from './db/bp-typegoose.module';

@Module({
	imports: [BpTypegooseModule],
	providers: [BpLogger],
	exports: [BpLogger, BpTypegooseModule],
})
export class ConfigurationModule {}
