import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { BpLogger } from './logger/bp-logger.service';

@Module({
  providers: [ConfigService, BpLogger],
  exports: [ConfigService, BpLogger],
})
export class ConfigurationModule {}
