import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting) private settingRepository: Repository<Setting>,
  ) {}
  create(createSettingDto: CreateSettingDto) {
    const newKey = this.settingRepository.create(createSettingDto);
    return this.settingRepository.save(newKey);
  }

  async findAll() {
    return await this.settingRepository.find();
  }

  async findOne(id: number) {
    return await this.settingRepository.findOneBy({ id });
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    const key = await this.findOne(id);
    return this.settingRepository.save({ ...key, ...updateSettingDto });
  }

  async remove(id: number) {
    const key = await this.findOne(id);
    return this.settingRepository.remove(key);
  }
}
