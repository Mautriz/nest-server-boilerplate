import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AdminService } from './admin.service';

@Module({
  providers: [UserService, AdminService],
})
export class UserModule {}
