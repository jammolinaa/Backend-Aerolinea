// src/vuelos/vuelos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Vuelo } from './entities/vuelo.entity';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Aviones } from '../aviones/entities/avione.entity';
import { Destino } from '../destinos/entities/destino.entity';
import { Pasajero } from 'src/pasajeros/entities/pasajero.entity';

@Injectable()
export class VuelosService {
  constructor(
    @InjectRepository(Vuelo)
    private vueloRepository: Repository<Vuelo>,
    @InjectRepository(Aviones)
    private avionRepository: Repository<Aviones>,
    @InjectRepository(Destino)
    private destinoRepository: Repository<Destino>,
    @InjectRepository(Pasajero)
    private pasajeroRepository: Repository<Pasajero>,
  ) {}

async create(dto: CreateVueloDto): Promise<Vuelo> {
  const avion = await this.avionRepository.findOneBy({ id: dto.avionId });
  const origen = await this.destinoRepository.findOneBy({ id: dto.origenId });
  const destino = await this.destinoRepository.findOneBy({ id: dto.destinoId });

  if (!avion || !origen || !destino) {
    throw new NotFoundException('Avión u origen/destino no encontrado');
  }

  let pasajeros = [];
  if (Array.isArray(dto.pasajerosId) && dto.pasajerosId.length > 0) {
    pasajeros = await this.pasajeroRepository.findBy({ id: In(dto.pasajerosId) });
    if (pasajeros.length !== dto.pasajerosId.length) {
      throw new NotFoundException('Uno o más pasajeros no encontrados');
    }
  }

  const vuelo = this.vueloRepository.create({
    numeroVuelo: dto.numeroVuelo,
    fecha: dto.fecha,
    horaSalida: dto.horaSalida,
    horaLlegada: dto.horaLlegada,
    avion,
    origen,
    destino,
    pasajeros, 
  });

  return this.vueloRepository.save(vuelo);
}
  findAll(): Promise<Vuelo[]> {
  return this.vueloRepository.find({
    relations: ['avion', 'origen', 'destino', 'pasajeros'],
  });
}

async findOne(id: number): Promise<Vuelo> {
  const vuelo = await this.vueloRepository.findOne({
    where: { id },
    relations: ['avion', 'origen', 'destino', 'pasajeros'],
  });
  if (!vuelo) throw new NotFoundException(`Vuelo con ID ${id} no encontrado`);
  return vuelo;
  }


 async update(id: number, dto: UpdateVueloDto): Promise<Vuelo> {
  const vuelo = await this.vueloRepository.findOne({
    where: { id },
    relations: ['pasajeros', 'avion', 'origen', 'destino'],
  });
  if (!vuelo) throw new NotFoundException(`Vuelo con ID ${id} no encontrado`);

  const avion = dto.avionId ? await this.avionRepository.findOneBy({ id: dto.avionId }) : vuelo.avion;
  const origen = dto.origenId ? await this.destinoRepository.findOneBy({ id: dto.origenId }) : vuelo.origen;
  const destino = dto.destinoId ? await this.destinoRepository.findOneBy({ id: dto.destinoId }) : vuelo.destino;

  let pasajeros = vuelo.pasajeros;
  if (dto.pasajerosId && Array.isArray(dto.pasajerosId) && dto.pasajerosId.length > 0) {
    pasajeros = await this.pasajeroRepository.findBy({ id: In(dto.pasajerosId) });
  }

  this.vueloRepository.merge(vuelo, {
    ...dto,
    avion,
    origen,
    destino,
    pasajeros,
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
