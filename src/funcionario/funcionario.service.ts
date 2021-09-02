import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Repository } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Id } from '../valueobject/Id';

@Injectable()
export class FuncionarioService {
  public constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  create(createFuncionarioDto: CreateFuncionarioDto) {
    const funcionario = new Funcionario({
      id: Id.generate(),
      ...createFuncionarioDto,
    });
    return this.funcionarioRepository.save(funcionario);
  }

  findAll() {
    return this.funcionarioRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionario`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionario`;
  }
}
