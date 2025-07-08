import { IsNotEmpty, IsString } from 'class-validator';

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
