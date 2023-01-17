import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { AttributeService } from '../attribute/attribute.service';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan) private planRepository: Repository<Plan>,
    private attributeService: AttributeService,
  ) {}
  async create(createPlanDto: CreatePlanDto) {
    const attribute = await this.attributeService.findOne(
      createPlanDto.attributeId,
    );
    if (!createPlanDto.attributeId || !attribute) {
      return 'attributeId Not Found';
    }
    const plan = new Plan();
    plan.name = createPlanDto.name;
    plan.date = createPlanDto.date;
    plan.description = createPlanDto.description;
    plan.attributes = [attribute];
    return await this.planRepository.save(plan);
  }
  async findAll() {
    return await this.planRepository.find({ relations: { attributes: true } });
  }

  async findOne(id: number) {
    return await this.planRepository.findOneBy({ id });
  }

  async update(id: number, updatePlaneDto: UpdatePlanDto) {
    const plane = await this.findOne(id);
    return this.planRepository.save({ ...plane, ...updatePlaneDto });
  }

  async remove(id: number) {
    const plane = await this.findOne(id);
    return this.planRepository.remove(plane);
  }
}
