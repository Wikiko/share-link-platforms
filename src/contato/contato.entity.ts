import { AbstractEntity } from '../abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Funcionario } from '../funcionario/funcionario.entity';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsPhoneNumber,
  ValidateIf,
} from 'class-validator';

export enum TipoDeContato {
  TELEFONE = 'TELEFONE',
  CELULAR = 'CELULAR',
  EMAIL = 'EMAIL',
}

@Entity('contatos')
export class Contato extends AbstractEntity {
  @IsEnum(TipoDeContato)
  @Column()
  tipo: TipoDeContato;

  @ValidateIf((object) => object.tipo === TipoDeContato.CELULAR)
  @IsMobilePhone('pt-BR')
  @Column({
    nullable: true,
  })
  celular: string;

  @ValidateIf((object) => object.tipo === TipoDeContato.TELEFONE)
  @IsPhoneNumber('BR')
  @Column({
    nullable: true,
  })
  telefone: string;

  @ValidateIf((object) => object.tipo === TipoDeContato.EMAIL)
  @IsEmail()
  @Column({
    nullable: true,
  })
  email: string;

  @IsBoolean()
  @Column('boolean')
  principal = false;

  @Column({
    nullable: true,
  })
  observacao: string;

  @ManyToOne(() => Funcionario)
  funcionario?: Funcionario;
}
