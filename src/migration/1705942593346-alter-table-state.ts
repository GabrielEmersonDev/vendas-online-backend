import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1705942593346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('');
  }
}
