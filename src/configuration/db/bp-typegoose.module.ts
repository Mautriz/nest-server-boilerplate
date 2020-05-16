import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { BpConfigService } from '../config/config.service';
import { BpConfigModule } from '../config/bp-config.module';

@Module({
	imports: [
		TypegooseModule.forRootAsync({
			useFactory: async (configService: BpConfigService) => ({
				uri: configService.getMongoUri(),
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			}),
			imports: [BpConfigModule],
			inject: [BpConfigService],
		}),
	],
	exports: [TypegooseModule],
})
export class BpTypegooseModule {}
