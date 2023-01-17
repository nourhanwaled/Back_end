import { IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  icon: string;
  @IsNotEmpty()
  description: string;
}
