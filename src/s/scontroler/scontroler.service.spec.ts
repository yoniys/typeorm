import { Test, TestingModule } from '@nestjs/testing';
import { ScontrolerService } from './scontroler.service';

describe('ScontrolerService', () => {
  let service: ScontrolerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScontrolerService],
    }).compile();

    service = module.get<ScontrolerService>(ScontrolerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
