import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { config } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config =new DocumentBuilder()
  .setTitle('Todo App').setDescription('Todo App API').setVersion('1.0').build();
  app.setGlobalPrefix('api');
  app.enableCors({
    origin:["http://localhost:60431"]
  });


 const document:OpenAPIObject = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup("/", app, document);
 await app.listen(30012);

}

bootstrap().then();
