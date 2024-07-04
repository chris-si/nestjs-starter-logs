import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3100);

  logger.error(`This should be a red message`);
  logger.warn(`This should be a yellow message`);
  logger.log(`This should be a green message`);
  logger.debug(`This should be a pink message`);
}
bootstrap();
