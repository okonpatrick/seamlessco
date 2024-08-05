// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as mongoose from 'mongoose';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   // Enable CORS before starting the server
//   app.enableCors({
//     origin: [
//       'http://localhost:5173',
//       'http://localhost:3001',
//       'http://localhost:3000',
//     ],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   });

//   mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB');
//   });

//   mongoose.connection.on('error', (err) => {
//     console.error('Error connecting to MongoDB', err);
//   });

//   await app.listen(3000);
// }

// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS before starting the server
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3001',
      'http://localhost:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
  console.log('Server is running on http://localhost:3000');
}

bootstrap();
