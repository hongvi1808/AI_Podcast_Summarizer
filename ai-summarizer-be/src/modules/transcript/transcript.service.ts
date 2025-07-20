import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TranscriptEntity } from 'src/base/database/entities/transcript.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TranscriptService {
    constructor(@InjectRepository(TranscriptEntity) private dbRepo: Repository<TranscriptEntity>) { }
    
    async genTranscript(body: any): Promise<any> {
        // check db if summary exists -> return it
       // transcript
       // created file, transcript
        return {
        transcript: `Generated transcript for: ${body.text}`,
        title: body.title || 'Default Title',
        createdAt: new Date().toISOString(),
        };
    }
}
