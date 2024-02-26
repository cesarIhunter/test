import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  //app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const options = new DocumentBuilder()
  .setTitle(`Task API`)
  .setDescription(``)
  // .addServer('api')
  .addBearerAuth()
  .setVersion('1.0')
  .build();

 /* const document = SwaggerModule.createDocument(context, options);
  SwaggerModule.setup('swagger', context, document, {
    swaggerOptions: {
      docExpansion: 'none',
      displayRequestDuration: true,
      showCommonExtensions: true,
    },
  });*/

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}

bootstrap();
