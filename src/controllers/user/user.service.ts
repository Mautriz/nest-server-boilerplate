import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User, UserModel } from './model/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: UserModel) {}

  async createUser(): Promise<User> {
    const user = await this.userModel.cmCreate();
    this.userModel.removeBlacklistedProperties(user);
    return user;
  }

  async findByUsername(): Promise<User> {
    return await this.userModel.findByUsername('ciao').exec();
  }
}
