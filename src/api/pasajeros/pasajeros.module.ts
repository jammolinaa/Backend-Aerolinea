import { Module } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosController } from './pasajeros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasajero } from '../../data/entities/pasajeros/pasajero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pasajero])],
  controllers: [PasajerosController],
  providers: [PasajerosService],
  exports: [TypeOrmModule], 
})
export class PasajerosModule {}
