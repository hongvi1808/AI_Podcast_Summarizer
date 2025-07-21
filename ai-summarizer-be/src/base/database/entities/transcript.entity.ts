import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { FileInfoEnity } from "./file-info.entity";

@Entity('transcript')
export class TranscriptEntity {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    fileId: string;

    @ManyToOne(() => FileInfoEnity, podcast => podcast.transcripts)
    file?: FileInfoEnity;

    @Column({ type: 'text' })
    content: string;

    @Column({ default: 'native' }) // vi, en, zh...
    language?: string;

    @Column({ name: 'created-at', type: 'bigint', default: () => "EXTRACT(EPOCH FROM NOW()) * 1000" })
    createdAt?: number


}