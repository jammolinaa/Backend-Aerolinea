<<<<<<< HEAD
import { IsNotEmpty, IsString } from 'class-validator';
=======
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
>>>>>>> 566dea056b36ef05cda479c1fd7ac028b3a6be03

export class CreateDestinoDto {

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsString()
  @IsNotEmpty()
  pais: string;

  @IsString()
  @IsNotEmpty()
  codigoAeropuerto: string;
}
