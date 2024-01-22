import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInState1705942662175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('');
  }
}
