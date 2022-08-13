import { Test, TestingModule } from '@nestjs/testing';
import { MonthController } from './month.controller';

describe('MonthPullController', () => {
  let controller: MonthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthController],
    }).compile();

    controller = module.get<MonthController>(MonthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
