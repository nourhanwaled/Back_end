import { PartialType } from '@nestjs/mapped-types';
import { CreatePartenerDto } from './create-partner.dto';

export class UpdatePartenerDto extends PartialType(CreatePartenerDto) {}
