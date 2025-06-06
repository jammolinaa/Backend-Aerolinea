<<<<<<< HEAD
// src/pasajeros/pasajeros.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasajero } from './entities/pasajero.entity';
import { PasajerosService } from './pasajeros.service';
import { PasajerosController } from './pasajeros.controller';
=======
import { Module } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosController } from './pasajeros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasajero } from './entities/pasajero.entity';
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03

@Module({
  imports: [TypeOrmModule.forFeature([Pasajero])],
  controllers: [PasajerosController],
  providers: [PasajerosService],
<<<<<<< HEAD
  exports: [TypeOrmModule], 
=======
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
})
export class PasajerosModule {}
