// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: 'yourSecretKey',
//     });
//   }

//   async validate(payload: any) {
//     return { userId: payload.sub, firstname: payload.firstname, lastname: payload.lastname, email: payload.email, dateofbirth: payload.dateofbirth, role: payload.role };
//   }
// }


// src/auth/jwt.strategy.ts
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      dateofbirth: payload.dateofbirth,
      role: payload.role
    };
  }
}
