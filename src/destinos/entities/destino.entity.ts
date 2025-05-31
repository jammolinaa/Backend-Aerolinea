import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Destino {
@PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  ciudad: string;

  @Column()
  pais: string;

  @Column()
  codigoAeropuerto: string;

}
