import { IsIn, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FileInfoDto } from "src/modules/files/dto/file-info.dto";

export class TranscriptDto {
    @ValidateNested()
    @Type(() => FileInfoDto)
    file: FileInfoDto;

    // @IsString()
    // language: string;
}
