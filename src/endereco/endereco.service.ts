import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Endereco } from './endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService extends TypeOrmCrudService<Endereco> {
  constructor(
    @InjectRepository(Endereco)
    public repo: Repository<Endereco>,
  ) {
    super(repo);
  }
}
