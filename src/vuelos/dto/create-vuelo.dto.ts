import { IsNotEmpty, IsNumber, IsArray, ArrayNotEmpty, IsInt } from 'class-validator';

export class CreateVueloDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  avionId: number;

  @IsInt()
  @IsNotEmpty()
  origenId: number;

  @IsInt()
  @IsNotEmpty()
  destinoId: number;

  @IsInt()
  @IsNotEmpty()
  horarioId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  pasajerosId: number[];
}
