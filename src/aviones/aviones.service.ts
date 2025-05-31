import { Injectable } from '@nestjs/common';
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

  async create(createAvioneDto: CreateAvioneDto): Promise<Aviones> {
    const nuevoAvion = this.avionesRepository.create(createAvioneDto);
    return await this.avionesRepository.save(nuevoAvion);
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

  async remove(id: number): Promise<void> {
    await this.avionesRepository.delete(id);
  }
}