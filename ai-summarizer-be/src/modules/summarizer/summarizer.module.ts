import { Module } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';
import { SummarizerController } from './summarizer.controller';

@Module({
  controllers: [SummarizerController],
  providers: [SummarizerService],
})
export class SummarizerModule {}
