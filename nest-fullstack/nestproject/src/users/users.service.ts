// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import * as argon2 from 'argon2';
// import { User, UserDocument } from '../users/schemas/user.schema';

// @Injectable()
// export class UsersService {
//   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

//   async findOne(email: string): Promise<User | undefined> {
//     return this.userModel.findOne({ email }).exec();
//   }

//   async create(
//     firstname: string,
//     lastname: string,
//     email: string,
//     dateofbirth: Date,
//     gender: string,
//     password: string,
//     role: string,
//   ): Promise<User> {
//     const hashedPassword = await argon2.hash(password);
//     const newUser = new this.userModel({
//       firstname,
//       lastname,
//       email,
//       gender,
//       dateofbirth,
//       password: hashedPassword,
//       role,
//     });
//     return newUser.save();
//   }

//   async validateUser(email: string, pass: string): Promise<any> {
//     const user = await this.findOne(email);
//     if (user && (await argon2.verify(user.password, pass))) {
//       // const { password, ...result } = user.toObject();
//       const userObj = (user as UserDocument).toObject();
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { password, ...result } = userObj;

//       return result;
//     }
//     return null;
//   }
// }





// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { User, UserDocument } from '../users/schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await argon2.hash(createUserDto.password);
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.findOneByEmail(email);
    if (user && (await argon2.verify(user.password, pass))) {
      const userObj = (user as UserDocument).toObject();
      const { password, ...result } = userObj;
      return result;
    }
    return null;
  }

  async findOneById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
}

