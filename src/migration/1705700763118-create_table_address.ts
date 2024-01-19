import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAddress1705700763118 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'address',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'user_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'complement',
          type: 'character varying',
          isNullable: true,
        },
        {
          name: 'number',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'cep',
          type: 'character varying',
          isNullable: false,
        },
        {
          name: 'city_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
      ],
      foreignKeys: [
        {
          columnNames: ['user_id'],
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['city_id'],
          referencedTableName: 'city',
          referencedColumnNames: ['id'],
        },
      ],
    }));


  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');
  }
}
