import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Id } from '../../valueobject/Id';

export interface FuncionarioProps {
  id: Id;
  nome: string;
  dataNascimento?: Date;
  rg?: string;
  cpf?: string;
  cargo: string;
}

@Entity('funcionarios')
export class Funcionario {
  @PrimaryColumn('varchar', {
    transformer: {
      to(entityValue: Id): string {
        return entityValue.id;
      },
      from(databaseValue: string): Id {
        return Id.from(databaseValue);
      },
    },
  })
  id: Id;

  @Column()
  nome: string;

  @Column()
  dataNascimento?: Date;

  @Column()
  rg?: string;

  @Column()
  cpf?: string;

  @Column()
  cargo: string;

  public constructor(builder?: FuncionarioProps) {
    this.id = builder?.id;
    this.nome = builder?.nome;
    this.dataNascimento = builder?.dataNascimento;
    this.rg = builder?.rg;
    this.cpf = builder?.cpf;
    this.cargo = builder?.cargo;
  }
}
