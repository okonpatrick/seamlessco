// // src/users/users.controller.ts
// import { Controller, Post, Body } from '@nestjs/common';
// import { UsersService } from './users.service';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('signup')
//   async signup(
//     @Body() createUserDto: { firstname: string; lastname: string; email: string; dateofbirth: Date; gender: string; password: string; role: string },
//   ) {
//     return this.usersService.create(
//       createUserDto.firstname,
//       createUserDto.lastname,
//       createUserDto.email,
//       createUserDto.dateofbirth,
//       createUserDto.gender,
//       createUserDto.password,
//       createUserDto.role,
//     );
//   }

//   @Post('signin')
//   async signin(@Body() loginUserDto: { email: string; password: string }) {
//     return this.usersService.validateUser(
//       loginUserDto.email,
//       loginUserDto.password,
//     );
//   }
// }


// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto'; // Adjust the path according to your project structure

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('signin')
  async signin(@Body() loginUserDto: { email: string; password: string }) {
    return this.usersService.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
  }
}
