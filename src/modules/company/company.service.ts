import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const user = await User.findOne({ where: { id: createCompanyDto.userId } });
    if (user == null) {
      return 'userId not found';
    }
    const company = new Company();
    company.name = createCompanyDto.name;
    company.date = createCompanyDto.date;
    company.user = user;
    return await this.companyRepository.save(company);
  }

  async findAll() {
    return await this.companyRepository.find({ relations: { user: true } });
  }

  async findOne(id: number) {
    return await this.companyRepository.findOneBy({ id });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.findOne(id);
    return this.companyRepository.save({ ...company, ...updateCompanyDto });
  }

  async remove(id: number) {
    const company = await this.findOne(id);
    return this.companyRepository.remove(company);
  }
}
