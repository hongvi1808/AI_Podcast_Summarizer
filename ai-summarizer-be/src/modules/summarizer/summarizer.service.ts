import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SummaryEntity } from 'src/base/database/entities/summary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SummarizerService {

constructor(@InjectRepository(SummaryEntity) private dbRepo: Repository<SummaryEntity>) { }

    async genSummary(body: any): Promise<any> {
        // check db if summary exists -> return it
       // transcript
       // summary
       // created file, summary
        return {
        summary: `Generated summary for: ${body.text}`,
        title: body.title || 'Default Title',
        createdAt: new Date().toISOString(),
        };
    }
}
