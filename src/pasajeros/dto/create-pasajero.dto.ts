import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreatePasajeroDto {

    @IsString()
    @IsNotEmpty()
    nombre:    string;
    @IsInt()
    documento: number;
    @IsEmail()
    email:     string;
}
