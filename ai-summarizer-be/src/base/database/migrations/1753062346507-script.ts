import { MigrationInterface, QueryRunner } from "typeorm";

export class Script1753062346507 implements MigrationInterface {
    name = 'Script1753062346507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "summary" DROP CONSTRAINT "FK_ef764ae863972ae23aa12d4d234"`);
        await queryRunner.query(`ALTER TABLE "summary" ALTER COLUMN "fileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "summary" ALTER COLUMN "created-at" SET DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000`);
        await queryRunner.query(`ALTER TABLE "file_info" ALTER COLUMN "created-at" SET DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000`);
        await queryRunner.query(`ALTER TABLE "transcript" DROP CONSTRAINT "FK_38ca65b3d73ef27635c702f9d11"`);
        await queryRunner.query(`ALTER TABLE "transcript" ALTER COLUMN "fileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transcript" ALTER COLUMN "created-at" SET DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000`);
        await queryRunner.query(`ALTER TABLE "summary" ADD CONSTRAINT "FK_ef764ae863972ae23aa12d4d234" FOREIGN KEY ("fileId") REFERENCES "file_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transcript" ADD CONSTRAINT "FK_38ca65b3d73ef27635c702f9d11" FOREIGN KEY ("fileId") REFERENCES "file_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transcript" DROP CONSTRAINT "FK_38ca65b3d73ef27635c702f9d11"`);
        await queryRunner.query(`ALTER TABLE "summary" DROP CONSTRAINT "FK_ef764ae863972ae23aa12d4d234"`);
        await queryRunner.query(`ALTER TABLE "transcript" ALTER COLUMN "created-at" SET DEFAULT (EXTRACT(epoch FROM now()) * (1000))`);
        await queryRunner.query(`ALTER TABLE "transcript" ALTER COLUMN "fileId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transcript" ADD CONSTRAINT "FK_38ca65b3d73ef27635c702f9d11" FOREIGN KEY ("fileId") REFERENCES "file_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "file_info" ALTER COLUMN "created-at" SET DEFAULT (EXTRACT(epoch FROM now()) * (1000))`);
        await queryRunner.query(`ALTER TABLE "summary" ALTER COLUMN "created-at" SET DEFAULT (EXTRACT(epoch FROM now()) * (1000))`);
        await queryRunner.query(`ALTER TABLE "summary" ALTER COLUMN "fileId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "summary" ADD CONSTRAINT "FK_ef764ae863972ae23aa12d4d234" FOREIGN KEY ("fileId") REFERENCES "file_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
