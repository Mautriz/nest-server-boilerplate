import { pre, prop, modelOptions } from '@typegoose/typegoose';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { hashPassword, comparePasswords } from '../../../helpers/bcrypt.helpers';
const blacklist = ['__v', 'id', 'password'];

@pre<User>('save', async function() {
  if (!this.isModified('password')) return;
  this.password = await hashPassword(this.password);
  return;
})
@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  options: {
    customName: 'User',
  },
})
export class User {
  _id?: string;

  @prop()
  username!: string;

  @prop({ select: false })
  password: string;

  @prop({ select: false })
  __v?: number;
  @prop({ select: false })
  id: string;

  /**
   * Virtuals
   */
  get myField() {
    return this.password;
  }

  /**
   * Instance methods
   */
  changeName(this: UserDocument) {
    this.username = 'Franco';
  }

  async comparePassword(this: UserDocument, password: string): Promise<boolean> {
    return await comparePasswords(password, this.password);
  }

  /**
   * Static methods
   */
  static async cmCreate(this: UserModel) {
    return this.create({ username: 'ciao', password: 'ciao2' });
  }

  static findByUsername(this: UserModel, username: string) {
    return this.findOne({ username });
  }

  static removeBlacklistedProperties(user: User) {
    blacklist.forEach(prop => {
      user[prop] = undefined;
    });
  }
}

export type UserDocument = DocumentType<User>;
export type UserModel = ReturnModelType<typeof User>;
