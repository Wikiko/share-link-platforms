import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddObraAndClienteToEndereco1631131246453
  implements MigrationInterface
{
  private tableName = 'enderecos';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'cliente_id',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'obra_id',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
    await queryRunner.createForeignKeys(this.tableName, this.getForeignKeys());
  }

  private getForeignKeys(): TableForeignKey[] {
    const clienteForeignKey = new TableForeignKey({
      columnNames: ['cliente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'clientes',
    });
    const obraForeignKey = new TableForeignKey({
      columnNames: ['obra_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'obras',
    });
    return [clienteForeignKey, obraForeignKey];
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.getForeignKeys());
    await queryRunner.dropColumns(this.tableName, ['cliente_id', 'obra_id']);
  }
}
