import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class horarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    salida: Date;

    @Column()
    llegada: Date;
}