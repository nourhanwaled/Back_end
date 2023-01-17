import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { AttributeService } from '../attribute/attribute.service';
import { Attribute } from '../attribute/entities/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plan, Attribute])],
  controllers: [PlanController],
  providers: [PlanService, AttributeService],
})
export class planModule {}
