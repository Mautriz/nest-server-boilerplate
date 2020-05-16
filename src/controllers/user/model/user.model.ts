import { prop, modelOptions } from '@typegoose/typegoose';
import { ReturnModelType } from '@typegoose/typegoose/lib/types';

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

  /**
   * Static methods
   */
  static async mioMetodo(this: ReturnModelType<typeof User>) {
    return await this.create({ username: 'ciao', password: 'ciao2' });
  }
}

export type UserModel = ReturnModelType<typeof User>;
