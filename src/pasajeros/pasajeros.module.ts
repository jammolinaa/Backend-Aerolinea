// src/pasajeros/pasajeros.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasajero } from './entities/pasajero.entity';
import { PasajerosService } from './pasajeros.service';
import { PasajerosController } from './pasajeros.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pasajero])],
  controllers: [PasajerosController],
  providers: [PasajerosService],
  exports: [TypeOrmModule], 
})
export class PasajerosModule {}
