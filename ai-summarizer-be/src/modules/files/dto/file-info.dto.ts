import { IsString } from "class-validator";

export class FileInfoDto {
    @IsString()
    id: string;

    @IsString()
    fullPath: string;

    @IsString()
    url: string;

    @IsString()
    path: string;

    @IsString()
    hash: string;

}
