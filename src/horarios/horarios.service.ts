<<<<<<< HEAD
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Horarios } from './entities/horario.entity';
=======
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { horarios } from './entities/horario.entity';
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
import { Repository } from 'typeorm';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';

@Injectable()
export class HorariosService {
  constructor(
<<<<<<< HEAD
    @InjectRepository(Horarios)
    private horariosRepository: Repository<Horarios>,
  ){}

async create(dto: CreateHorarioDto): Promise<Horarios>{
=======
    @InjectRepository(horarios)
    private horariosRepository: Repository<horarios>,
  ){}

async create(dto: CreateHorarioDto): Promise<horarios>{
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
    const destino = this.horariosRepository.create(dto);
    return await this.horariosRepository.save(destino);
  }

<<<<<<< HEAD
  async findAll(): Promise<Horarios[]> {
    return this.horariosRepository.find();
  }

  async findOne(id: number): Promise<Horarios> {
      return await this.horariosRepository.findOneBy({ id });
  }
  
  async update(id: number, updateDestinoDto: UpdateHorarioDto): Promise<Horarios> {
      await this.horariosRepository.update(id, updateDestinoDto);
      return this.findOne(id);
  }
  
  async remove(id: number): Promise<{ message: string }> {
      const result = await this.horariosRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Pasajero con ID ${id} no encontrado`);
      }
      return { message: `Pasajero con ID ${id} eliminado` };
  }
}
=======
  async findAll(): Promise<horarios[]> {
    return this.horariosRepository.find();
  }

  async findOne(id: number): Promise<horarios> {
      return await this.horariosRepository.findOneBy({ id });
    }
  
  async update(id: number, updateDestinoDto: UpdateHorarioDto): Promise<horarios> {
      await this.horariosRepository.update(id, updateDestinoDto);
      return this.findOne(id);
    }
  
  async remove(id: number): Promise<void> {
      await this.horariosRepository.delete(id);
    }
  }
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
