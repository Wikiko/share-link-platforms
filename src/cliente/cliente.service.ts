import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Cliente } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService extends TypeOrmCrudService<Cliente> {
  constructor(
    @InjectRepository(Cliente)
    public repo: Repository<Cliente>,
  ) {
    super(repo);
  }
}
