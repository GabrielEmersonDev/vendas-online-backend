import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInCity1705942667404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('');
  }
}
