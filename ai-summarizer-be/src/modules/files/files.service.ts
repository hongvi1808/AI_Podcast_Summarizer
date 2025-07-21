import { Injectable } from '@nestjs/common';
import { FilesRepo } from './file.repository';
import { FileInfoEnity } from 'src/base/database/entities/file-info.entity';

@Injectable()
export class FilesService {
    constructor(private readonly filesRepo: FilesRepo) {}

    async createFile(fileData: FileInfoEnity): Promise<any> {
        return await this.filesRepo.createFile(fileData);
    }
    async getFileById(fileId: string): Promise<any> {
        return await this.filesRepo.getFileById(fileId);
    }
    async getFileByHash(hash: string): Promise<any> {
        return await this.filesRepo.getFileByHash(hash);
    }
}
