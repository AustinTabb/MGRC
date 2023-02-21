import { Test, TestingModule } from '@nestjs/testing';
import { ballotController } from './ballot.controller';

describe('ballotController', () => {
  let controller: ballotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ballotController],
    }).compile();

    controller = module.get<ballotController>(ballotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
