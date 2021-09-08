import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Funcionario } from './funcionario.entity';
import { FuncionarioService } from './funcionario.service';

@Crud({
  model: {
    type: Funcionario,
  },
  query: {
    join: {
      contatos: {
        eager: true,
      },
      enderecos: {
        eager: true,
      },
    },
  },
})
@Controller('funcionario')
export class FuncionarioController implements CrudController<Funcionario> {
  constructor(public service: FuncionarioService) {}
}
