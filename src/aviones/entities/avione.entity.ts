import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aviones {

      @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      modelo: string;
    
      @Column()
      capacidad: number;

      @Column({ default: true }) 
      disponible: boolean;
}
