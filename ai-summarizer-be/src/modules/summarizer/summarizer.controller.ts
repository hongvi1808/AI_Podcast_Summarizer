import { Controller } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';

@Controller('summarizer')
export class SummarizerController {
  constructor(private readonly summarizerService: SummarizerService) {}
}
