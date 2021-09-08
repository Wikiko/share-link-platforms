import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddClienteToContato1631125950305 implements MigrationInterface {
  private tableName = 'contatos';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'cliente_id',
        type: 'varchar',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKeys(this.tableName, this.getForeignKeys());
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
    await queryRunner.dropColumn(this.tableName, 'cliente_id');
  }
}
