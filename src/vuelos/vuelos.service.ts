// src/vuelos/vuelos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vuelo } from './entities/vuelo.entity';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Aviones } from '../aviones/entities/avione.entity';
import { Destino } from '../destinos/entities/destino.entity';

@Injectable()
export class VuelosService {
  constructor(
    @InjectRepository(Vuelo)
    private vueloRepository: Repository<Vuelo>,
    @InjectRepository(Aviones)
    private avionRepository: Repository<Aviones>,
    @InjectRepository(Destino)
    private destinoRepository: Repository<Destino>,
  ) {}

  async create(dto: CreateVueloDto): Promise<Vuelo> {
    const avion = await this.avionRepository.findOneBy({ id: dto.avionId });
    const origen = await this.destinoRepository.findOneBy({ id: dto.origenId });
    const destino = await this.destinoRepository.findOneBy({ id: dto.destinoId });

    if (!avion || !origen || !destino) {
      throw new NotFoundException('Avión u origen/destino no encontrado');
    }

    const vuelo = this.vueloRepository.create({
      numeroVuelo: dto.numeroVuelo,
      fecha: dto.fecha,
      horaSalida: dto.horaSalida,
      horaLlegada: dto.horaLlegada,
      avion,
      origen,
      destino,
    });

    return this.vueloRepository.save(vuelo);
  }

  findAll(): Promise<Vuelo[]> {
    return this.vueloRepository.find({
      relations: ['avion', 'origen', 'destino'],
    });
  }

  async findOne(id: number): Promise<Vuelo> {
    const vuelo = await this.vueloRepository.findOne({
      where: { id },
      relations: ['avion', 'origen', 'destino'],
    });
    if (!vuelo) throw new NotFoundException(`Vuelo con ID ${id} no encontrado`);
    return vuelo;
  }

  async update(id: number, dto: UpdateVueloDto): Promise<Vuelo> {
    const vuelo = await this.vueloRepository.findOneBy({ id });
    if (!vuelo) throw new NotFoundException(`Vuelo con ID ${id} no encontrado`);

    const avion = dto.avionId ? await this.avionRepository.findOneBy({ id: dto.avionId }) : vuelo.avion;
    const origen = dto.origenId ? await this.destinoRepository.findOneBy({ id: dto.origenId }) : vuelo.origen;
    const destino = dto.destinoId ? await this.destinoRepository.findOneBy({ id: dto.destinoId }) : vuelo.destino;

    this.vueloRepository.merge(vuelo, {
      ...dto,
      avion,
      origen,
      destino,
    });

    return this.vueloRepository.save(vuelo);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.vueloRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Vuelo con ID ${id} no encontrado`);
    }
    return { message: `Vuelo con ID ${id} eliminado correctamente` };
  }
}
