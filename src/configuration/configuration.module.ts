import { Module } from '@nestjs/common';
import { BpLogger } from './logger/bp-logger.service';
import { BpTypegooseModule } from './db/bp-typegoose.module';
import { BpConfigModule } from './config/bp-config.module';

@Module({
  imports: [BpTypegooseModule, BpConfigModule],
  providers: [BpLogger],
  exports: [BpConfigModule, BpLogger, BpTypegooseModule],
})
export class ConfigurationModule {}
