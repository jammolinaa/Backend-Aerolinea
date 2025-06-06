// src/pasajeros/pasajeros.controller.ts
import {
  Controller,Post,Get,Patch,Delete,Param,Body} from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';

@Controller('pasajeros')
export class PasajerosController {
  constructor(private readonly pasajerosService: PasajerosService) {}

  @Post()
  create(@Body() dto: CreatePasajeroDto) {
    return this.pasajerosService.create(dto);
  }

  @Get()
  findAll() {
    return this.pasajerosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pasajerosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePasajeroDto) {
    return this.pasajerosService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pasajerosService.remove(+id);
  }
}
