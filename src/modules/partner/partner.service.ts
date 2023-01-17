import { Injectable } from '@nestjs/common';
import { CreatePartenerDto } from './dto/create-partner.dto';
import { UpdatePartenerDto } from './dto/update-partner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partener } from './entities/partner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartenerService {
  constructor(
    @InjectRepository(Partener)
    private partenerRepository: Repository<Partener>,
  ) {}
  create(createPartenerDto: CreatePartenerDto) {
    const partener = new Partener();
    partener.name = createPartenerDto.name;
    partener.icon = createPartenerDto.icon;
    return this.partenerRepository.save(partener);
  }

  async findAll() {
    return await this.partenerRepository.find();
  }

  async findOne(id: number) {
    return await this.partenerRepository.findOneBy({ id });
  }

  async update(id: number, updatePartenerDto: UpdatePartenerDto) {
    const partener = await this.findOne(id);
    return this.partenerRepository.save({ ...partener, ...updatePartenerDto });
  }

  async remove(id: number) {
    const partener = await this.findOne(id);
    return this.partenerRepository.remove(partener);
  }
}
