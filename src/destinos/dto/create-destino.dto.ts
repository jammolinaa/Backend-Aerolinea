import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateDestinoDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

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
