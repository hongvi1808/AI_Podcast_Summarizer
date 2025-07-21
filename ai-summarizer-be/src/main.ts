import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from './configs/exception-filter/global-exception.filter';
import { ResponseFormatInterceptor } from './configs/interceptor/response-format.interceptor';
import { TrimPipe } from './configs/pipe/trim.pipe';
import { GlobalValidationPipe } from './configs/pipe/global-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = app.get(ConfigService);
  
  const port = config.get<number>('PORT', { infer: true })
  const globalPrefixApi = config.get<string>('GLOBAL_API_PREFIX', '')
  const cors = config.get<string>('CORS_ORIGINS', '')
  
  app.enableCors(cors);
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  app.use(helmet())

  app.setGlobalPrefix(globalPrefixApi)

  app.useGlobalPipes(
    new TrimPipe(),
    new GlobalValidationPipe()
  );
  app.useGlobalInterceptors(new ResponseFormatInterceptor())

  app.useGlobalFilters(new GlobalExceptionFilter())


  await app.listen(port, () => Logger.verbose(`Server is running on port: ${port}`));

}
bootstrap();
