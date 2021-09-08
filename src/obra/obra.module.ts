import { Module } from '@nestjs/common';
import { ObraService } from './obra.service';
import { ObraController } from './obra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obra } from './obra.entity';

@Module({
  providers: [ObraService],
  controllers: [ObraController],
  imports: [TypeOrmModule.forFeature([Obra])],
})
export class ObraModule {}
