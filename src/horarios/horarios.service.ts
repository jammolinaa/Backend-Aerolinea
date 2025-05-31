import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { horarios } from './entities/horario.entity';
import { Repository } from 'typeorm';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(horarios)
    private horariosRepository: Repository<horarios>,
  ){}

async create(dto: CreateHorarioDto): Promise<horarios>{
    const destino = this.horariosRepository.create(dto);
    return await this.horariosRepository.save(destino);
  }

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