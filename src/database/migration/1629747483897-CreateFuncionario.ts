import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFuncionario1629747483897 implements MigrationInterface {
  private tableName = 'funcionarios';

  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'data_nascimento',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cargo',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      return queryRunner.dropTable(this.tableName);
  }
}
