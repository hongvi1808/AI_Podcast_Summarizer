import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { FileInfoEnity } from "./file-info.entity";

@Entity('summary')
export class SummaryEntity {
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @ManyToOne(() => FileInfoEnity, podcast => podcast.transcripts)
    file: FileInfoEnity;

    @Column({ type: 'text' })
    summary: string;

    @Column('created-at')
    createdAt: string


}