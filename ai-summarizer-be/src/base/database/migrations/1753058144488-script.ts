import { MigrationInterface, QueryRunner } from "typeorm";

export class Script1753058144488 implements MigrationInterface {
    name = 'Script1753058144488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "summary" ALTER COLUMN "created-at" SET DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000`);
        await queryRunner.query(`ALTER TABLE "file_info" ALTER COLUMN "created-at" SET DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000`);
        await queryRunner.query(`ALTER TABLE "transcript" ALTER COLUMN "created-at" SET DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transcript" ALTER COLUMN "created-at" SET DEFAULT (EXTRACT(epoch FROM now()) * (1000))`);
        await queryRunner.query(`ALTER TABLE "file_info" ALTER COLUMN "created-at" SET DEFAULT (EXTRACT(epoch FROM now()) * (1000))`);
        await queryRunner.query(`ALTER TABLE "summary" ALTER COLUMN "created-at" SET DEFAULT (EXTRACT(epoch FROM now()) * (1000))`);
    }

}
