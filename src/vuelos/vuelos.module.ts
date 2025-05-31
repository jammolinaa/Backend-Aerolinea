// src/vuelos/vuelos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { Vuelo } from './entities/vuelo.entity';
import { Aviones } from '../aviones/entities/avione.entity';
import { Destino } from '../destinos/entities/destino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelo, Aviones, Destino])],
  controllers: [VuelosController],
  providers: [VuelosService],
})
export class VuelosModule {}
