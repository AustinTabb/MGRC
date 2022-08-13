import { Test, TestingModule } from '@nestjs/testing';
import { gameService } from './game.service';

describe('GameService', () => {
  let service: gameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [gameService],
    }).compile();

    service = module.get<gameService>(gameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
