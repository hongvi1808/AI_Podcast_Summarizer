import { Injectable, Logger } from '@nestjs/common';
import { TranscriptRepo } from './transcript.repository';

import { uuidv7 } from 'uuidv7';
import { FilesService } from '../files/files.service';
import { TranscriptDto } from './dto/transcript.dto';
import { OpenaiService } from '../openai/openai.service';

@Injectable()
export class TranscriptService {
    constructor(private readonly transcriptRepo: TranscriptRepo,
        private readonly fileService: FilesService,
        private readonly openaiService: OpenaiService,
    ) { }

    async genTranscript(body: TranscriptDto): Promise<any> {
        const existedTrans = await this.transcriptRepo.getTranscriptByHashFile(body.file.hash);
        if (existedTrans) return existedTrans;
        const existedFile = await this.fileService.getFileByHash(body.file.hash);
         if (!existedFile) await this.fileService.createFile({
            id: body.file.id,
            fileHash: body.file.hash,
            url: body.file.url,
            name: body.file.path,
            path: body.file.fullPath,

        });
        // transcript
        const trans = await this.openaiService.transcribeAudioFromUrl(body.file.url)
        const title = await this.openaiService.generateTitle(trans)
        // created file, transcript
        const createdTranscript = await this.transcriptRepo.createTranscript({
            id: uuidv7(),
            content: trans,
            fileId: body.file.id,
            name: title,
        }
        );
        return createdTranscript
    }


}
