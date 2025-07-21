import { Module } from '@nestjs/common';
import { TranscriptService } from './transcript.service';
import { TranscriptController } from './transcript.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranscriptEntity } from 'src/base/database/entities/transcript.entity';
import { FilesModule } from '../files/files.module';
import { TranscriptRepo } from './transcript.repository';
import { OpenaiModule } from '../openai/openai.module';

@Module({
  imports: [TypeOrmModule.forFeature([TranscriptEntity]), FilesModule, OpenaiModule],
  controllers: [TranscriptController],
  providers: [TranscriptService, TranscriptRepo],
  exports: [TranscriptService],
})
export class TranscriptModule {}
