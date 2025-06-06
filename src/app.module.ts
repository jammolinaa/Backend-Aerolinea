import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';
import { HorariosModule } from './horarios/horarios.module';
import { DestinosModule } from './destinos/destinos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { AvionesModule } from './aviones/aviones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => typeOrmConfig,
      }),
    
    VuelosModule, HorariosModule, DestinosModule, 
    PasajerosModule, AvionesModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
