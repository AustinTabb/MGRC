import { Test, TestingModule } from '@nestjs/testing';
import { ballotService } from './ballot.service';

describe('ballotService', () => {
  let service: ballotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ballotService],
    }).compile();

    service = module.get<ballotService>(ballotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
