import { IsEmail, IsNotEmpty } from 'class-validator';
export class UserRegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  confirm: string;
}
