import { Test, TestingModule } from '@nestjs/testing';
import { TypormcoController } from './typormco.controller';

describe('TypormcoController', () => {
  let controller: TypormcoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypormcoController],
    }).compile();

    controller = module.get<TypormcoController>(TypormcoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
