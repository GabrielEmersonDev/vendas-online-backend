import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateTableState1705710120461 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'state',
            columns: [
              { name: 'id', type: 'integer', isPrimary: true },
              { name: 'name', type: 'character varying', isNullable: false },
              { name: 'created_at', type: 'timestamp', default: 'now()', isNullable: false },
              { name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: false },
            ],
          }),
          true,
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('state');
      }
    }