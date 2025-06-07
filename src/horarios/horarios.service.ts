import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Horarios } from './entities/horario.entity';
import { Repository } from 'typeorm';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(Horarios)
    private horariosRepository: Repository<Horarios>,
  ){}

async create(dto: CreateHorarioDto): Promise<Horarios>{
    const destino = this.horariosRepository.create(dto);
    return await this.horariosRepository.save(destino);
  }

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
