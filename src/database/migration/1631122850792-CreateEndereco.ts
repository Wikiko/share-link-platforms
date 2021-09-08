import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateEndereco1631122850792 implements MigrationInterface {
  private tableName = 'enderecos';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'rua',
            type: 'varchar',
          },
          {
            name: 'bairro',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'cidade',
            type: 'varchar',
          },
          {
            name: 'estado',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'funcionario_id',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys(this.tableName, this.getForeignKeys());
  }

  private getForeignKeys(): TableForeignKey[] {
    const foreignKey = new TableForeignKey({
      columnNames: ['funcionario_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'funcionarios',
    });
    return [foreignKey];
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.getForeignKeys());
    await queryRunner.dropTable(this.tableName, true);
  }
}
