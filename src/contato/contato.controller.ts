import { Controller } from '@nestjs/common';
import { Contato } from './contato.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { ContatoService } from './contato.service';

@Crud({
  model: {
    type: Contato,
  },
})
@Controller('contato')
export class ContatoController implements CrudController<Contato> {
  constructor(public service: ContatoService) {}
}
