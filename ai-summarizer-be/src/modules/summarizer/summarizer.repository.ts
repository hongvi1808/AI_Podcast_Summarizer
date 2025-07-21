import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SummaryEntity } from 'src/base/database/entities/summary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SummarizerRepo {
constructor(@InjectRepository(SummaryEntity) private dbRepo: Repository<SummaryEntity>) { }

    async createSummary(data: any): Promise<any> {
        // Logic to create a file entry in the database
        const newFile = this.dbRepo.create(data);
        return await this.dbRepo.save(newFile);
    }

    async getSummaryById(fileId: string): Promise<any> {
        return await this.dbRepo.findOneBy({ id: fileId });
    }
    async getSummaryByHashFile(hashFile: string): Promise<any> {
        return await this.dbRepo.findOneBy({ file: { fileHash: hashFile }, type: 'short' });
    }

    
    
}
