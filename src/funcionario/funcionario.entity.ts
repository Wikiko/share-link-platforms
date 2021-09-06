import { Column, Entity, OneToMany } from 'typeorm';
import { Id } from '../valueobject/Id';
import { AbstractEntity } from '../abstract.entity';
import { Contato } from '../contato/contato.entity';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateIf } from 'class-validator';
import { IsCPF } from 'brazilian-class-validator';

@Entity('funcionarios')
export class Funcionario extends AbstractEntity {
  @IsNotEmpty()
  @Column()
  nome: string;

  @Column({
    nullable: true,
  })
  rg?: string;

  @ValidateIf((object) => object.cpf !== undefined && object.cpf !== null)
  @IsCPF()
  @Column({
    nullable: true,
  })
  cpf?: string;

  @Column()
  profissao: string;

  @Type(() => Contato)
  @OneToMany(() => Contato, (contato) => contato.funcionario, {
    eager: true,
    cascade: true,
  })
  contatos: Contato[];
}
