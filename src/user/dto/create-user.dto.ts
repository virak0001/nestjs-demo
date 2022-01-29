import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly username: string;

  @IsOptional()
  readonly avatar: string;

  @IsNumber()
  readonly age: number;
}
