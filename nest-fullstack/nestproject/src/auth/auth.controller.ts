// import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LocalAuthGuard } from '../auth/local-auth.guard';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @UseGuards(LocalAuthGuard)
//   @Post('login')
//   async login(@Request() req) {
//     return this.authService.login(req.user);
//   }

//   @Post('register')
//   async register(@Body() body) {
//     const { firstname, lastname, email, dateofbirth, gender, password, role } = body;
//     return this.authService.register(firstname, lastname, email, dateofbirth, gender, password, role);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('profile')
//   getProfile(@Request() req) {
//     return req.user;
//   }
// }





// src/auth/auth.controller.ts
import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
}


