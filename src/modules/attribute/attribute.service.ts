import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(Attribute)
    private attributeRepository: Repository<Attribute>,
  ) {}

  async create(createAttributeDto: CreateAttributeDto) {
    const attribute = await this.attributeRepository.create(createAttributeDto);
    return await this.attributeRepository.save(attribute);
  }

  async findAll() {
    return await this.attributeRepository.find({
      relations: {
        plans: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.attributeRepository.findOneBy({ id });
  }

  async update(id: number, updateAttributeDto: UpdateAttributeDto) {
    const attribute = await this.findOne(id);
    return this.attributeRepository.save({
      ...attribute,
      ...updateAttributeDto,
    });
  }

  async remove(id: number) {
    const attribute = await this.findOne(id);
    return this.attributeRepository.remove(attribute);
  }
}
