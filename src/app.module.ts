import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HorariosModule } from './api/horarios/horarios.module';
import { DestinosModule } from './api/destinos/destinos.module';
import { PasajerosModule } from './api/pasajeros/pasajeros.module';
import { AvionesModule } from './api/aviones/aviones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './data/config/database.config';
import { UsersModule } from './api/users/users.module';
import { UserClientModule } from './core/user-client/user-client.module';
// import { ModbusModule } from './core/modbus/modbus.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => typeOrmConfig,
    }),
    UserClientModule, // ✅ Esto es lo que crea y exporta USER_SERVICE
    HorariosModule,
    DestinosModule,
    PasajerosModule,
    AvionesModule,
    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
