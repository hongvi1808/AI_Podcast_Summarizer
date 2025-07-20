import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      validationSchema: Joi.object({
        PORT: Joi.number().port().default(5678),
        NODE_ENV: Joi.string().valid('local', 'test').default('local'),
        GLOBAL_API_PREFIX: Joi.string().required(),
        CORS_ORIGINS: Joi.string(),
      })
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
