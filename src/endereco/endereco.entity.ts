import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { IsCEP } from 'brazilian-class-validator';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { Funcionario } from '../funcionario/funcionario.entity';

@Entity('enderecos')
export class Endereco extends AbstractEntity {
  @IsNotEmpty()
  @IsString()
  @Column()
  rua: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  numero: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  estado: string;

  @ValidateIf((endereco) => endereco.cep !== null && endereco.cep !== undefined)
  @IsString()
  @IsCEP()
  @Column({
    nullable: true,
  })
  cep: string;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.enderecos)
  funcionario?: Funcionario;
}
