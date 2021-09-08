import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Obra } from './obra.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ObraService extends TypeOrmCrudService<Obra> {
  constructor(
    @InjectRepository(Obra)
    public repo: Repository<Obra>,
  ) {
    super(repo);
  }
}
