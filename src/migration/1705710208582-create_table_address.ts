import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateTableAddress1705710208582 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'address',
            columns: [
              { name: 'id', type: 'integer', isPrimary: true },
              { name: 'user_id', type: 'integer', isNullable: false },
              { name: 'complement', type: 'character varying', isNullable: true },
              { name: 'number', type: 'integer', isNullable: false },
              { name: 'cep', type: 'character varying', isNullable: false },
              { name: 'city_id', type: 'integer', isNullable: false },
              { name: 'created_at', type: 'timestamp', default: 'now()', isNullable: false },
              { name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: false },
            ],
            foreignKeys: [
              {
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user',
              },
              {
                columnNames: ['city_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'city',
              },
            ],
          }),
          true,
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address');
      }
    }
