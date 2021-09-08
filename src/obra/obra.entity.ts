import { AbstractEntity } from '../abstract.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { Endereco } from '../endereco/endereco.entity';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

@Entity('obras')
export class Obra extends AbstractEntity {
  @ValidateNested()
  @Type(() => Cliente)
  @ManyToOne(() => Cliente, (cliente) => cliente.obras, {
    eager: true,
    cascade: true,
    nullable: false,
  })
  cliente: Cliente;

  @IsString()
  @IsNotEmpty()
  @Column()
  nome: string;

  @ValidateNested()
  @Type(() => Endereco)
  @OneToOne(() => Endereco, (endereco) => endereco.obra, {
    eager: true,
    cascade: true,
    nullable: false,
  })
  endereco: Endereco;
}
