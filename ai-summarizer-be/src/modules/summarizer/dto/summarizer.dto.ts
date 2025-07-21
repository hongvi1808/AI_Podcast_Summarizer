import { IsIn, IsOptional, IsString, ValidateNested } from "class-validator";
import { FileInfoDto } from "../../files/dto/file-info.dto";
import { Type } from "class-transformer";

export class SummarizerDto {
    @ValidateNested()
    @Type(() => FileInfoDto)
    file: FileInfoDto;

    // @IsOptional()
    // @IsIn(['short', 'detailed', 'bullet'])
    // type: 'short' | 'detailed' | 'bullet';
}
