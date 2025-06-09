import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHorarioDto {

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date) 
  salida: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  llegada: Date;
}
