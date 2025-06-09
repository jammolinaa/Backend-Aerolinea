import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Horarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    salida: Date;

    @Column()
    llegada: Date;
}