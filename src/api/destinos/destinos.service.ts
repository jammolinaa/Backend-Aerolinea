import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destino } from '../../data/entities/destinos/destino.entity';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';

@Injectable()
export class DestinosService {
  constructor(
    @InjectRepository(Destino)
    private destinoRepository: Repository<Destino>,
  ) {}

  async create(dto: CreateDestinoDto): Promise<Destino> {
    const destino = this.destinoRepository.create(dto);
    return await this.destinoRepository.save(destino);
  }

  async findAll(): Promise<Destino[]> {
    return this.destinoRepository.find();
  }

  async findOne(id: number): Promise<Destino> {
    return await this.destinoRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateDestinoDto: UpdateDestinoDto,
  ): Promise<Destino> {
    await this.destinoRepository.update(id, updateDestinoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.destinoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pasajero con ID ${id} no encontrado`);
    }
    return { message: `Pasajero con ID ${id} eliminado` };
  }
}
