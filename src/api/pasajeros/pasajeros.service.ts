import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pasajero } from '../../data/entities/pasajeros/pasajero.entity';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';

@Injectable()
export class PasajerosService {
  constructor(
    @InjectRepository(Pasajero)
    private pasajeroRepository: Repository<Pasajero>,
  ) {}

  async create(dto: CreatePasajeroDto): Promise<Pasajero> {
    const pasajero = this.pasajeroRepository.create(dto);
    return await this.pasajeroRepository.save(pasajero);
  }

  async findAll(): Promise<Pasajero[]> {
    return this.pasajeroRepository.find();
  }

  async findOne(id: number): Promise<Pasajero> {
    const pasajero = await this.pasajeroRepository.findOneBy({ id });
    if (!pasajero)
      throw new NotFoundException(`Pasajero con ID ${id} no encontrado`);
    return pasajero;
  }

  async update(id: number, dto: UpdatePasajeroDto): Promise<Pasajero> {
    await this.pasajeroRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.pasajeroRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pasajero con ID ${id} no encontrado`);
    }
    return { message: `Pasajero con ID ${id} eliminado` };
  }
}
