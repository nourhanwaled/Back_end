import { IsNotEmpty } from 'class-validator';

export class CreatePartenerDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  icon: string;
}
