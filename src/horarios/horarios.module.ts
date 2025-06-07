import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horarios } from './entities/horario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Horarios])],
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}
