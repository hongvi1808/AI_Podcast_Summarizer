import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SummaryEntity } from 'src/base/database/entities/summary.entity';
import { TranscriptEntity } from 'src/base/database/entities/transcript.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TranscriptRepo {
constructor(@InjectRepository(TranscriptEntity) private dbRepo: Repository<TranscriptEntity>) { }

    async createTranscript(data: TranscriptEntity): Promise<any> {
        const newFile = this.dbRepo.create(data);
        return await this.dbRepo.save(newFile);
    }


    async getTranscriptById(fileId: string): Promise<any> {
        return await this.dbRepo.findOneBy({ id: fileId });
    }
    async getTranscriptByHashFile(hashFile: string): Promise<any> {
        return await this.dbRepo.findOne({
            where: { file: { fileHash: hashFile }, language: 'native' },
            relations: ['file'],
        });
    }
    async updateTranscript(id: string, data: Partial<TranscriptEntity>): Promise<any> {
        return await this.dbRepo.update(id, data);
    }

    
    
}
