import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { TipoDeContato } from '../../contato/contato.entity';

export class CreateContato1630947183420 implements MigrationInterface {
  private tableName = 'contatos';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'tipo',
            type: 'enum',
            enum: [
              TipoDeContato.EMAIL,
              TipoDeContato.TELEFONE,
              TipoDeContato.CELULAR,
            ],
          },
          {
            name: 'celular',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'principal',
            type: 'bool',
            default: false,
          },
          {
            name: 'observacao',
            type: 'text',
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
    const foreignKey = new TableForeignKey({
      columnNames: ['funcionario_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'funcionarios',
    });
    await queryRunner.createForeignKey(this.tableName, foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable(this.tableName, true);
  }
}
