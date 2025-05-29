import { Injectable } from '@nestjs/common';
import { CreateAvioneDto } from './dto/create-avione.dto';
import { UpdateAvioneDto } from './dto/update-avione.dto';

@Injectable()
export class AvionesService {
  create(createAvioneDto: CreateAvioneDto) {
    return 'This action adds a new avione';
  }

  findAll() {
    return `This action returns all aviones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avione`;
  }

  update(id: number, updateAvioneDto: UpdateAvioneDto) {
    return `This action updates a #${id} avione`;
  }

  remove(id: number) {
    return `This action removes a #${id} avione`;
  }
}
