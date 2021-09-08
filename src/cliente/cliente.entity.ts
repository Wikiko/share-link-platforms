import { AbstractEntity } from '../abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Endereco } from '../endereco/endereco.entity';
import { Contato } from '../contato/contato.entity';
import { Obra } from '../obra/obra.entity';

@Entity('clientes')
export class Cliente extends AbstractEntity {
  @IsString()
  @IsNotEmpty()
  @Column()
  nome: string;

  @ValidateNested()
  @Type(() => Endereco)
  @OneToMany(() => Endereco, (endereco) => endereco.cliente, {
    eager: true,
    cascade: true,
  })
  enderecos: Endereco[];

  @ValidateNested()
  @Type(() => Contato)
  @OneToMany(() => Contato, (contato) => contato.cliente, {
    eager: true,
    cascade: true,
  })
  contatos: Contato[];

  @ValidateNested()
  @Type(() => Obra)
  @OneToMany(() => Obra, (obra) => obra.cliente)
  obras: Obra[];
}
