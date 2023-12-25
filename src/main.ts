import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { APP_CONFIG } from './app.config';

async function bootstrap() {
  console.log(`Running in ${APP_CONFIG.environment} mode.`);
  console.log(`Target node: ${APP_CONFIG.envSpecific.nodeUrl}`);

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Created By Me EVM API')
    .setDescription('Provides an API for the Created By Me contract set.')
    .setVersion('1.0')
    .build();
    
  const options: SwaggerDocumentOptions =  {
      operationIdFactory: (
        controllerKey: string,
        methodKey: string
      ) => methodKey
    };
  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
