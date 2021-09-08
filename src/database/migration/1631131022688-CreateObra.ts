import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateObra1631131022688 implements MigrationInterface {
  private tableName = 'obras';

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
            name: 'cliente_id',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
  }

  private getForeignKeys(): TableForeignKey[] {
    const foreignKey = new TableForeignKey({
      columnNames: ['cliente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'clientes',
    });
    return [foreignKey];
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.getForeignKeys());
    await queryRunner.dropTable(this.tableName, true);
  }
}
