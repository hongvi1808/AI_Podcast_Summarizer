import { Module } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';
import { SummarizerController } from './summarizer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SummaryEntity } from 'src/base/database/entities/summary.entity';
import { SummarizerRepo } from './summarizer.repository';
import { FilesModule } from '../files/files.module';
import { TranscriptModule } from '../transcript/transcript.module';
import { OpenaiModule } from '../openai/openai.module';

@Module({
  imports: [TypeOrmModule.forFeature([SummaryEntity]), FilesModule, TranscriptModule, OpenaiModule],
  controllers: [SummarizerController],
  providers: [SummarizerService, SummarizerRepo],
})
export class SummarizerModule {}
