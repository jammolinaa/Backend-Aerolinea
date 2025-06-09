import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aviones } from '../../data/entities/aviones/avione.entity';
import { CreateAvioneDto } from './dto/create-avione.dto';
import { UpdateAvioneDto } from './dto/update-avione.dto';

@Injectable()
export class AvionesService {
  constructor(
    @InjectRepository(Aviones)
    private avionesRepository: Repository<Aviones>,
  ) { }

  async create(createAvioneDto: CreateAvioneDto): Promise<{ message: string; data: Aviones }> {
  const nuevoAvion = this.avionesRepository.create(createAvioneDto);
  const guardado = await this.avionesRepository.save(nuevoAvion);
  console.log('✅ Avión creado:', guardado);
  return { message: 'Avión creado exitosamente', data: guardado };
}


  async findAll(): Promise<Aviones[]> {
    return await this.avionesRepository.find();
  }

  async findOne(id: number): Promise<Aviones> {
    return await this.avionesRepository.findOneBy({ id });
  }

  async update(id: number, updateAvioneDto: UpdateAvioneDto): Promise<Aviones> {
    await this.avionesRepository.update(id, updateAvioneDto);
    return this.findOne(id); 
  }

  async remove(id: number): Promise<{ message: string }> {
        const result = await this.avionesRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Pasajero con ID ${id} no encontrado`);
        }
        return { message: `Pasajero con ID ${id} eliminado` };
      }
}