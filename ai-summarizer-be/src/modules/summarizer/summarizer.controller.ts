import { Body, Controller, Post } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';
import { SummarizerDto } from './dto/summarizer.dto';

@Controller('summarizer')
export class SummarizerController {
  constructor(private readonly summarizerService: SummarizerService) {}

  @Post('generate')
   async genSuma(@Body() body: SummarizerDto ): Promise<any> {
    const result = await this.summarizerService.genSummary(body)
    return result
  }
}
