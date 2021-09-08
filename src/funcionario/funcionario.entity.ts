import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { Contato } from '../contato/contato.entity';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateIf, ValidateNested } from 'class-validator';
import { IsCPF } from 'brazilian-class-validator';
import { Endereco } from '../endereco/endereco.entity';

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

  @ValidateNested()
  @Type(() => Contato)
  @OneToMany(() => Contato, (contato) => contato.funcionario, {
    eager: true,
    cascade: true,
  })
  contatos: Contato[];

  @ValidateNested()
  @Type(() => Endereco)
  @OneToMany(() => Endereco, (endereco) => endereco.funcionario, {
    eager: true,
    cascade: true,
  })
  enderecos: Endereco[];
}
