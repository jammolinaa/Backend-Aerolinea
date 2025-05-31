// src/vuelos/vuelos.controller.ts
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';

@Controller('vuelos')
export class VuelosController {
  constructor(private readonly vuelosService: VuelosService) {}

  @Post()
  create(@Body() dto: CreateVueloDto) {
    return this.vuelosService.create(dto);
  }

  @Get()
  findAll() {
    return this.vuelosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vuelosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateVueloDto) {
    return this.vuelosService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vuelosService.remove(+id);
  }
}
