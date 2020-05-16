import { Module } from '@nestjs/common';
import { User } from '../../controllers/user/model/user.model';
import { TypegooseModule } from 'nestjs-typegoose';

const MODELS = [User];

@Module({
	imports: [TypegooseModule.forFeature([...MODELS])],
	exports: [TypegooseModule],
})
export class BpTypegooseModelsModule {}
