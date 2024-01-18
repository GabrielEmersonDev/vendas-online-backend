import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1705612053930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS public."user"
    (
        id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
        name character varying COLLATE pg_catalog."default" NOT NULL,
        email character varying COLLATE pg_catalog."default" NOT NULL,
        phone character varying COLLATE pg_catalog."default" NOT NULL,
        cpf character varying COLLATE pg_catalog."default" NOT NULL,
        password character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id)
    )

    TABLESPACE pg_default;

    ALTER TABLE IF EXISTS public."user"
        OWNER to postgres;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table
    `);
  }
}
