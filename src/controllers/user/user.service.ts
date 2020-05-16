import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User, UserModel } from './model/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private user: UserModel) {}

  async createUser(): Promise<User> {
    return await this.user.mioMetodo();
  }
}
