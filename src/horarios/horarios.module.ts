import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { Horarios } from './entities/horario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Horarios])],
=======
import { horarios } from './entities/horario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([horarios])],
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}
