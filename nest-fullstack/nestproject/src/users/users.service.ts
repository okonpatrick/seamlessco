import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { User, UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  async create(
    username: string,
    password: string,
    role: string,
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password);
    const newUser = new this.userModel({
      username,
      password: hashedPassword,
      role,
    });
    return newUser.save();
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && (await argon2.verify(user.password, pass))) {
      // const { password, ...result } = user.toObject();
      const userObj = (user as UserDocument).toObject();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = userObj;

      return result;
    }
    return null;
  }
}
