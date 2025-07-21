import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileInfoEnity } from "./entities/file-info.entity";
import { TranscriptEntity } from "./entities/transcript.entity";
import { SummaryEntity } from "./entities/summary.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST', { infer: true }),
                port: configService.get<number>('DB_PORT', { infer: true }),
                database: configService.get<string>('DB_NAME', { infer: true }),
                username: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASSWORD'),
                entities: [__dirname + '/entities/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
                synchronize: configService.get('NODE_ENV') !== 'production',
                autoLoadEntities: configService.get('NODE_ENV') !== 'production',
                cache: true,
            })
        }),
        TypeOrmModule.forFeature([
            FileInfoEnity, TranscriptEntity, SummaryEntity
        ]),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule { }