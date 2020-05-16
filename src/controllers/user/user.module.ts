import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { UserController } from './user.controller';
import { BpTypegooseModelsModule } from '../../configuration/db/bp-typegoose-models.module';

@Module({
	providers: [UserService, AdminService],
	imports: [BpTypegooseModelsModule],
	controllers: [UserController],
})
export class UserModule {}
