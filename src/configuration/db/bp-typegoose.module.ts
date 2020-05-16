import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { BpConfig } from '../config/config.service';

@Module({
	imports: [
		TypegooseModule.forRootAsync({
			useFactory: async () => ({
				uri: BpConfig.getMongoUri(),
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			}),
		}),
	],
	exports: [TypegooseModule],
})
export class BpTypegooseModule {}
