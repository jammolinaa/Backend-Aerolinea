import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
<<<<<<< HEAD
export class Horarios {
=======
export class horarios {
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    salida: Date;

    @Column()
    llegada: Date;
}