// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type UserDocument = User & Document;

// @Schema()
// export class User {
//   @Prop({ required: true })
//   firstname: string;

//   @Prop({ required: true })
//   lastname: string;

//   @Prop({ required: true })
//   email: string;

//   @Prop({ required: true })
//   dateofbirth: string;

//   @Prop({ required: true })
//   gender: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ required: true, enum: ['admin', 'employee', 'user'] })
//   role: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);



import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, type: Date })
  dateofbirth: Date;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: ['admin', 'employee', 'user'] })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
