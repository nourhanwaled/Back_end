import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'Please Enter a Valid Date' })
  date: Date;
  @IsNotEmpty()
  userId: number;
}
