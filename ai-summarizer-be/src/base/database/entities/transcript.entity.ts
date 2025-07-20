import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { FileInfoEnity } from "./file-info.entity";

@Entity('transcript')
export class TranscriptEntity {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @ManyToOne(() => FileInfoEnity, podcast => podcast.transcripts)
    file: FileInfoEnity;

    @Column({ type: 'text' })
    content: string;

    @Column('created-at')
    createdAt: string


}