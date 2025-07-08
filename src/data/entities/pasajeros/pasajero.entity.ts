import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pasajero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  documento: number;

  @Column()
  email: string;
}
