import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileInfoEnity } from 'src/base/database/entities/file-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesRepo {
    constructor(@InjectRepository(FileInfoEnity) private dbRepo: Repository<FileInfoEnity>) { }

    async createFile(fileData: any): Promise<any> {
        // Logic to create a file entry in the database
        const newFile = this.dbRepo.create(fileData);
        return await this.dbRepo.save(newFile);
    }

    async getFileById(fileId: string): Promise<any> {
        // Logic to retrieve a file by its ID
        return await this.dbRepo.findOneBy({ id: fileId });
    }
    async getFileByHash(hash: string): Promise<any> {
        // Logic to retrieve a file by its ID
        return await this.dbRepo.findOneBy({ fileHash: hash });
    }

    
    
}
