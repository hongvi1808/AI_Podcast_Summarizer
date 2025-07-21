import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { FileInfoEnity } from "./file-info.entity";

@Entity('summary')
export class SummaryEntity {
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    fileId: string;

    @ManyToOne(() => FileInfoEnity, podcast => podcast.transcripts)
    file?: FileInfoEnity;

    @Column({ type: 'text' })
    summary: string;

    @Column({ default: 'short' }) // 'short' | 'detailed' | 'bullet'
    type?: string

    @Column({ name: 'created-at', type: 'bigint', default: () => "EXTRACT(EPOCH FROM NOW()) * 1000" })
    createdAt?: number


}