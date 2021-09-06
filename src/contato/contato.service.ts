import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contato } from './contato.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContatoService extends TypeOrmCrudService<Contato> {
  constructor(
    @InjectRepository(Contato)
    public repo: Repository<Contato>,
  ) {
    super(repo);
  }
}
