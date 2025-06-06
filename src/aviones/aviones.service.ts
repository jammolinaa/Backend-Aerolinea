<<<<<<< HEAD
import { Injectable, NotFoundException } from '@nestjs/common';
=======
import { Injectable } from '@nestjs/common';
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aviones } from './entities/avione.entity';
import { CreateAvioneDto } from './dto/create-avione.dto';
import { UpdateAvioneDto } from './dto/update-avione.dto';

@Injectable()
export class AvionesService {
  constructor(
    @InjectRepository(Aviones)
    private avionesRepository: Repository<Aviones>,
  ) { }

<<<<<<< HEAD
  async create(createAvioneDto: CreateAvioneDto): Promise<{ message: string; data: Aviones }> {
  const nuevoAvion = this.avionesRepository.create(createAvioneDto);
  const guardado = await this.avionesRepository.save(nuevoAvion);
  console.log('✅ Avión creado:', guardado);
  return { message: 'Avión creado exitosamente', data: guardado };
}

=======
  async create(createAvioneDto: CreateAvioneDto): Promise<Aviones> {
    const nuevoAvion = this.avionesRepository.create(createAvioneDto);
    return await this.avionesRepository.save(nuevoAvion);
  }
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03

  async findAll(): Promise<Aviones[]> {
    return await this.avionesRepository.find();
  }

  async findOne(id: number): Promise<Aviones> {
    return await this.avionesRepository.findOneBy({ id });
  }

  async update(id: number, updateAvioneDto: UpdateAvioneDto): Promise<Aviones> {
    await this.avionesRepository.update(id, updateAvioneDto);
<<<<<<< HEAD
    return this.findOne(id); 
  }

  async remove(id: number): Promise<{ message: string }> {
        const result = await this.avionesRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Pasajero con ID ${id} no encontrado`);
        }
        return { message: `Pasajero con ID ${id} eliminado` };
      }
=======
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.avionesRepository.delete(id);
  }
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
}