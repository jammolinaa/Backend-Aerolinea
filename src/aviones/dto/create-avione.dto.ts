import { IsNotEmpty, IsString, IsInt } from 'class-validator';
export class CreateAvioneDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsInt()
  @IsNotEmpty()
  capacidad: number;
}
