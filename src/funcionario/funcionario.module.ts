import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './funcionario.entity';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
  imports: [TypeOrmModule.forFeature([Funcionario])],
})
export class FuncionarioModule {}
