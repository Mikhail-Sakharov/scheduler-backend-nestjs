import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 The "scheduler-items" is running on: http://localhost:${port}`);
}
bootstrap();
