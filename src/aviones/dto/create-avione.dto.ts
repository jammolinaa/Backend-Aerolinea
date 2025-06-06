import { IsNotEmpty, IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';
export class CreateAvioneDto {

  id: number;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsInt()
  @IsNotEmpty()
  capacidad: number;

  @IsBoolean()
  @IsOptional()
  disponible?: boolean;
}
