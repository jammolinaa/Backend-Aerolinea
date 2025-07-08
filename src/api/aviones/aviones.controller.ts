import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AvionesService } from './aviones.service';
import { CreateAvioneDto } from './dto/create-avione.dto';
import { UpdateAvioneDto } from './dto/update-avione.dto';

@Controller('aviones')
@UsePipes(new ValidationPipe())
export class AvionesController {
  constructor(private readonly avionesService: AvionesService) {}

  @Post()
  create(@Body() createAvioneDto: CreateAvioneDto) {
    return this.avionesService.create(createAvioneDto);
  }

  @Get()
  findAll() {
    return this.avionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvioneDto: UpdateAvioneDto) {
    return this.avionesService.update(+id, updateAvioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avionesService.remove(+id);
  }
}
