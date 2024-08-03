// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(
    @Body() createUserDto: { username: string; password: string; role: string },
  ) {
    return this.usersService.create(
      createUserDto.username,
      createUserDto.password,
      createUserDto.role,
    );
  }

  @Post('signin')
  async signin(@Body() loginUserDto: { username: string; password: string }) {
    return this.usersService.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );
  }
}
