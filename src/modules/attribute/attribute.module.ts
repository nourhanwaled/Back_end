import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeController } from './attribute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { Plan } from '../plan/entities/plan.entity';
import { PlanService } from '../plan/plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plan, Attribute])],
  controllers: [AttributeController],
  providers: [AttributeService, PlanService],
})
export class AttributeModule {}
