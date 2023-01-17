import { Module } from '@nestjs/common';
import { PartenerService } from './partner.service';
import { PartenerController } from './partner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partener } from './entities/partner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partener])],
  controllers: [PartenerController],
  providers: [PartenerService],
})
export class PartenerModule {}
