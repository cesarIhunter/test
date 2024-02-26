import { IsEmail, IsNotEmpty, IsString , IsNumber} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;

  @IsNumber()
  public idRol: number;
}
