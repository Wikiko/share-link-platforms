import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from './endereco.entity';

@Module({
  providers: [EnderecoService],
  controllers: [EnderecoController],
  imports: [TypeOrmModule.forFeature([Endereco])],
})
export class EnderecoModule {}
