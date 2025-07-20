import { Body, Controller, Post } from '@nestjs/common';
import { TranscriptService } from './transcript.service';

@Controller('transcript')
export class TranscriptController {
  constructor(private readonly transcriptService: TranscriptService) {}

  @Post('generate')
     async genTranscript(@Body() body: any ): Promise<any> {
      const result = await this.transcriptService.genTranscript(body)
      return result
    }
}
