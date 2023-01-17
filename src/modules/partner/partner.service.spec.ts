import { Test, TestingModule } from '@nestjs/testing';
import { PartenerService } from './partner.service';

describe('PartenerService', () => {
  let service: PartenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartenerService],
    }).compile();

    service = module.get<PartenerService>(PartenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
