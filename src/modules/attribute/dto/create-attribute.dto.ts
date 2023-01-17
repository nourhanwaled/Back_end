import { IsNotEmpty } from 'class-validator';

export class CreateAttributeDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  planId: number;
}
