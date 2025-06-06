import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class CreateVueloDto {
  @IsString()
  @IsNotEmpty()
  numeroVuelo: string;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  horaSalida: string;

  @IsString()
  @IsNotEmpty()
  horaLlegada: string;

  @IsNumber()
  avionId: number;

  @IsNumber()
  origenId: number;

  @IsNumber()
  destinoId: number;

  @IsArray()
  @IsNumber({}, { each: true })
  pasajerosId: number[];
}
