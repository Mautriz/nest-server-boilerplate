import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { BpConfigService } from '../config/config.service';

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory: async (configService: BpConfigService) => ({
        uri: configService.getMongoUri(),
      }),
    }),
  ],
  exports: [TypegooseModule],
})
export class BpTypegooseModule {}
