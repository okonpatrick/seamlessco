// import { IsEmail, IsNotEmpty, IsString, IsDate, IsEnum } from 'class-validator';

// export class RegisterDto {
//   @IsNotEmpty()
//   @IsString()
//   firstname: string;

//   @IsNotEmpty()
//   @IsString()
//   lastname: string;

//   @IsNotEmpty()
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   @IsDate()
//   dateofbirth: string;

//   @IsNotEmpty()
//   @IsString()
//   gender: string;

//   @IsNotEmpty()
//   @IsString()
//   password: string;

//   @IsNotEmpty()
//   @IsString()
//   role: string;
// }



import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly dateofbirth: string;  // or Date if you want it as a Date object

  @IsNotEmpty()
  @IsString()
  readonly gender: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;
}
