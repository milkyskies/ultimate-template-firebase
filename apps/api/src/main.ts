import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_BASE_URL, CLIENT_BASE_URL, PORT } from './infra/env';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import helmet from 'helmet';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [CLIENT_BASE_URL],
    allowedHeaders: ['content-type', 'authorization'],
    credentials: true,
  });

  // app.useGlobalFilters(new SupertokensExceptionFilter());

  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`, `https://fonts.googleapis.com`],
          imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        },
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Minna No Accent API')
    .setVersion('0.1.0')
    .addServer(API_BASE_URL)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  fs.writeFileSync('./openapi.yaml', dump(document, {}));

  await app.listen(PORT);
}

bootstrap();
