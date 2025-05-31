// src/destinos/destinos.controller.ts
import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { DestinosService } from './destinos.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';

@Controller('destinos')
export class DestinosController {
  constructor(private readonly destinosService: DestinosService) {}

  @Post()
  create(@Body() dto: CreateDestinoDto) {
    return this.destinosService.create(dto);
  }

  @Get()
  findAll() {
    return this.destinosService.findAll();
  }

   @Get(':id')
    findOne(@Param('id') id: string) {
      return this.destinosService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDestinoDto: UpdateDestinoDto) {
      return this.destinosService.update(+id, updateDestinoDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.destinosService.remove(+id);
    }
}