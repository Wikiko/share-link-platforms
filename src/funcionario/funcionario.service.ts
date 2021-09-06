import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './funcionario.entity';

@Injectable()
export class FuncionarioService extends TypeOrmCrudService<Funcionario> {
  constructor(
    @InjectRepository(Funcionario)
    public repo: Repository<Funcionario>,
  ) {
    super(repo);
  }
}
