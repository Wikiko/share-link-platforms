import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Crud({
  model: {
    type: Cliente,
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
@Controller('cliente')
export class ClienteController implements CrudController<Cliente> {
  constructor(public service: ClienteService) {}
}
