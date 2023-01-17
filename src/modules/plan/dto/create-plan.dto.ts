import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreatePlanDto {
  @IsNotEmpty()
  name: string;
  @IsDate({ message: 'Please Enter a Valid Date' })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  date: Date;
  @IsNotEmpty()
  description: string;
  attributeId: number;
}
