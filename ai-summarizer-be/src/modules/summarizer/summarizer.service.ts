import { Injectable } from '@nestjs/common';
import { SummarizerRepo } from './summarizer.repository';
import { SummarizerDto } from './dto/summarizer.dto';
import { TranscriptService } from '../transcript/transcript.service';
import { OpenaiService } from '../openai/openai.service';
import {  uuidv7 } from 'uuidv7';

@Injectable()
export class SummarizerService {
    constructor(private readonly summarizerRepo: SummarizerRepo, 
        private readonly transcriptService: TranscriptService,
        private readonly openaiService: OpenaiService,
    ) { }

    async genSummary(body: SummarizerDto): Promise<any> {
        // check db if summary exists -> return it
        const existedSummary = await this.summarizerRepo.getSummaryByHashFile(body.file.hash);
        if (existedSummary) return existedSummary;
        // transcript
        const transcript = await this.transcriptService.genTranscript({file: body.file});
        // summary
        const summaryText = await this.openaiService.summarizeText(transcript.content);
        // created summary
        const createdSummary = await this.summarizerRepo.createSummary({
            id: uuidv7(),
            content: summaryText,
            fileId: transcript.fileId,
            name: transcript.name,
        });
        return summaryText
    }
}
