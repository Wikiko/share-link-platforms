import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Obra } from './obra.entity';
import { ObraService } from './obra.service';

@Crud({
  model: {
    type: Obra,
  },
  query: {
    join: {
      cliente: {
        eager: true,
        required: true,
      },
      endereco: {
        eager: true,
        required: true,
      },
    },
  },
})
@Controller('obra')
export class ObraController implements CrudController<Obra> {
  constructor(public service: ObraService) {}
}
