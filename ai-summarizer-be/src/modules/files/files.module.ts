import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { FilesRepo } from './file.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileInfoEnity } from 'src/base/database/entities/file-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileInfoEnity])],
  controllers: [FilesController],
  providers: [FilesService, FilesRepo],
  exports: [FilesService],
})
export class FilesModule {}
