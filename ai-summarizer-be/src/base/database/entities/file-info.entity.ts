import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { TranscriptEntity } from "./transcript.entity";
import { SummaryEntity } from "./summary.entity";

@Entity('file_info')
export class FileInfoEnity {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    url: string

    @Column()
    path: string

    @Column({ name: 'file-hash', unique: true })
    fileHash: string

    @Column({ name: 'created-at', type: 'bigint', default: () => "EXTRACT(EPOCH FROM NOW()) * 1000" })
    createdAt?: number

    @OneToMany(() => TranscriptEntity, transcript => transcript.file)
    transcripts?: TranscriptEntity[];

    @OneToMany(() => SummaryEntity, summary => summary.file)
    summaries?: SummaryEntity[];


}