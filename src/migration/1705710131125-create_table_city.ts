import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateTableCity1705710131125 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'city',
            columns: [
              { name: 'id', type: 'integer', isPrimary: true },
              { name: 'state_id', type: 'integer', isNullable: false },
              { name: 'name', type: 'character varying', isNullable: false },
              { name: 'created_at', type: 'timestamp', default: 'now()', isNullable: false },
              { name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: false },
            ],
            foreignKeys: [
              {
                columnNames: ['state_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'state',
              },
            ],
          }),
          true,
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('city');
      }
    }