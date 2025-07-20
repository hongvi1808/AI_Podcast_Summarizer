import { Body, Controller, Post } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';

@Controller('summarizer')
export class SummarizerController {
  constructor(private readonly summarizerService: SummarizerService) {}

  @Post('generate')
   async genSuma(@Body() body: any ): Promise<any> {
    const result = await this.summarizerService.genSummary(body)
    return result
  }
}
