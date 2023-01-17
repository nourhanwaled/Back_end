import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { PartenerService } from './partner.service';
import { CreatePartenerDto } from './dto/create-partner.dto';
import { UpdatePartenerDto } from './dto/update-partner.dto';

@Controller('partener')
export class PartenerController {
  constructor(private readonly partenerService: PartenerService) {}

  @Post()
  create(@Body(ValidationPipe) createPartenerDto: CreatePartenerDto) {
    return this.partenerService.create(createPartenerDto);
  }

  @Get()
  findAll() {
    return this.partenerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partenerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePartenerDto: UpdatePartenerDto,
  ) {
    return this.partenerService.update(+id, updatePartenerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partenerService.remove(+id);
  }
}
