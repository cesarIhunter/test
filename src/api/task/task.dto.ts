import { IsEmail, IsNotEmpty, IsString , IsNumber, IsOptional} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsOptional()
  public titulo: string;

  @IsString()
  @IsOptional()
  public descripcion: string;

  @IsNumber()
  @IsOptional()
  public horasEstimadas: number;

  @IsString()
  @IsOptional()
  fechaVencimiento: string;

  @IsString()
  @IsOptional()
  estatus: string;

  @IsNumber()
  @IsOptional()
  usuariosAsignados: number;

  @IsNumber()
  @IsOptional()
  costo: number;

  @IsString()
  @IsOptional()
  asignUsers: string;

}
