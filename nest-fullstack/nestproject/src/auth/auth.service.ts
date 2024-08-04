// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/users.service';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly usersService: UsersService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async validateUser(email: string, pass: string): Promise<any> {
//     const user = await this.usersService.validateUser(email, pass);
//     if (user) {
//       return user;
//     }
//     return null;
//   }

//   async login(user: any) {
//     const payload = { email: user.email, password: user.password, sub: user._id, role: user.role };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }

//   async register(firstname: string, lastname: string, email: string, dateofbirth: number, gender: string, password: string, role: string) {
//     const user = await this.usersService.create(firstname, lastname, email, dateofbirth, gender, password, role);
//     return {
//       firstname: user.firstname,
//       lastname: user.lastname,
//       email: user.email,
//       dateofbirth: user.dateofbirth,
//       gender: user.gender,
//       role: user.role,
//     };
//   }
// }



// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(email, pass);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(createUserDto);
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      dateofbirth: user.dateofbirth,
      gender: user.gender,
      role: user.role,
    };
  }
}
