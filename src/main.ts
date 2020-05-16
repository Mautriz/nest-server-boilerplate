import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BpConfigService } from './configuration/config/config.service';
import * as compression from 'compression';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(compression());

  const options = new DocumentBuilder()
    .setTitle('Big Authorization')
    .setDescription("Microservizio per l'autenticazione dei vari servizi BigProfiles")
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(app.get(BpConfigService).get().port);
}
bootstrap();
