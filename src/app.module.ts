import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HorariosModule } from './api/horarios/horarios.module';
import { DestinosModule } from './api/destinos/destinos.module';
import { PasajerosModule } from './api/pasajeros/pasajeros.module';
import { AvionesModule } from './api/aviones/aviones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './data/config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => typeOrmConfig,
      }),
    
    HorariosModule, DestinosModule, PasajerosModule, AvionesModule],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
