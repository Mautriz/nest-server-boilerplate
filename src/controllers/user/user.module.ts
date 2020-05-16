import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { BpTypegooseModelsModule } from '../../configuration/db/bp-typegoose-models.module';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './model/user.model';

@Module({
  providers: [UserService, AdminService],
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UserController],
})
export class UserModule {}
