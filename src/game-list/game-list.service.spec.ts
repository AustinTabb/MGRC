import { Test, TestingModule } from '@nestjs/testing';
import { GameListService } from './game-list.service';

describe('GameListService', () => {
  let service: GameListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameListService],
    }).compile();

    service = module.get<GameListService>(GameListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
