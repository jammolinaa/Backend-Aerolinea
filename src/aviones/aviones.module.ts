import { Module } from '@nestjs/common';
import { AvionesService } from './aviones.service';
import { AvionesController } from './aviones.controller';
import { Aviones } from './entities/avione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([Aviones])],
  controllers: [AvionesController],
  providers: [AvionesService],
})
export class AvionesModule {}
