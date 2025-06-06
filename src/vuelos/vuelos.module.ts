// src/vuelos/vuelos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vuelo } from './entities/vuelo.entity';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { Aviones } from '../aviones/entities/avione.entity';
import { Destino } from '../destinos/entities/destino.entity';
import { Pasajero } from '../pasajeros/entities/pasajero.entity';
import { PasajerosModule } from '../pasajeros/pasajeros.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Vuelo, Aviones, Destino, Pasajero]),
    PasajerosModule,
  ],
  controllers: [VuelosController],
  providers: [VuelosService],
})
export class VuelosModule {}
