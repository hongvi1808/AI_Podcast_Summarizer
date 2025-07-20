import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './base/database/database.module';
import { SummarizerModule } from './modules/summarizer/summarizer.module';
import { TranscriptModule } from './modules/transcript/transcript.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      validationSchema: Joi.object({
        PORT: Joi.number().port().default(5678),
        NODE_ENV: Joi.string().valid('local', 'test', 'production').default('local'),
        GLOBAL_API_PREFIX: Joi.string().required(),
        CORS_ORIGINS: Joi.string(),
      })
    }),
    DatabaseModule,
    SummarizerModule,
    TranscriptModule  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
