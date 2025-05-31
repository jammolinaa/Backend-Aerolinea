import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';
import { HorariosModule } from './horarios/horarios.module';
import { DestinosModule } from './destinos/destinos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { AvionesModule } from './aviones/aviones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aviones } from './aviones/entities/avione.entity';
import { Destino } from './destinos/entities/destino.entity';
import { horarios } from './horarios/entities/horario.entity';
import { Pasajero } from './pasajeros/entities/pasajero.entity';
import { Vuelo } from './vuelos/entities/vuelo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'aerolinea',
      entities: [Aviones, Destino, horarios, Pasajero, Vuelo],
      synchronize: true,
      }),
    
    VuelosModule, HorariosModule, 
    DestinosModule, PasajerosModule, 
    AvionesModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
