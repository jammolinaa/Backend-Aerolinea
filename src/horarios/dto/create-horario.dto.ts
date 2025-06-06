import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHorarioDto {

  @IsDate()
  @IsNotEmpty()
<<<<<<< HEAD
  @Type(() => Date) 
=======
  @Type(() => Date) // Necesario para que transforme correctamente el string a Date
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03
  salida: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  llegada: Date;
}
