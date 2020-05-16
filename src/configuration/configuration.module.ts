import { Module } from '@nestjs/common';
import { BpConfigService } from './config/config.service';
import { BpLogger } from './logger/bp-logger.service';
import { BpTypegooseModule } from './db/bp-typegoose.module';

@Module({
  providers: [BpConfigService, BpLogger, BpTypegooseModule],
  exports: [BpConfigService, BpLogger, BpTypegooseModule],
})
export class ConfigurationModule {}
