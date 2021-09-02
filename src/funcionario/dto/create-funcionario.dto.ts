import { FuncionarioProps } from '../entities/funcionario.entity';

export class CreateFuncionarioDto implements Omit<FuncionarioProps, 'id'> {
  cargo: string;
  cpf?: string;
  dataNascimento?: Date;
  nome: string;
  rg?: string;
}
