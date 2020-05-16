import { prop, modelOptions } from '@typegoose/typegoose';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose/lib/types';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  options: {
    customName: 'Comment',
  },
})
export class User {
  _id?: string;

  @prop()
  username!: string;

  @prop()
  password: string;

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

  /**
   * Static methods
   */
  static async mioMetodo(this: UserModel) {
    return await this.create({ username: 'ciao', password: 'ciao2' });
  }
}

export type UserDocument = DocumentType<User>;
export type UserModel = ReturnModelType<typeof User>;
