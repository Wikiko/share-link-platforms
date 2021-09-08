import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Endereco } from './endereco.entity';
import { EnderecoService } from './endereco.service';

@Crud({
  model: {
    type: Endereco,
  },
})
@Controller('endereco')
export class EnderecoController implements CrudController<Endereco> {
  constructor(public service: EnderecoService) {}
}
