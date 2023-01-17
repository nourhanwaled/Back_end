import { Test, TestingModule } from '@nestjs/testing';
import { PartenerController } from './partner.controller';
import { PartenerService } from './partner.service';

describe('PartenerController', () => {
  let controller: PartenerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartenerController],
      providers: [PartenerService],
    }).compile();

    controller = module.get<PartenerController>(PartenerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
