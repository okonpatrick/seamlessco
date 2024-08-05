import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}


// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost:27017/your-database-name', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }),
//     AuthModule,
//     UsersModule,
//   ],
// })
// export class AppModule {}
