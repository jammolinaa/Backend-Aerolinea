<<<<<<< HEAD
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
=======
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03

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
