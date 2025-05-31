// src/vuelos/entities/vuelo.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Aviones } from '../../aviones/entities/avione.entity';
import { Destino } from '../../destinos/entities/destino.entity';

@Entity()
export class Vuelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroVuelo: string;

  @Column()
  fecha: string;

  @Column()
  horaSalida: string;

  @Column()
  horaLlegada: string;

  @ManyToOne(() => Aviones)
  @JoinColumn({ name: 'avionId' })
  avion: Aviones;

  @ManyToOne(() => Destino)
  @JoinColumn({ name: 'origenId' })
  origen: Destino;

  @ManyToOne(() => Destino)
  @JoinColumn({ name: 'destinoId' })
  destino: Destino;
}
