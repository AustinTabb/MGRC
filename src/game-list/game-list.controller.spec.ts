import { Test, TestingModule } from '@nestjs/testing';
import { GameListController } from './game-list.controller';

describe('GameListController', () => {
  let controller: GameListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameListController],
    }).compile();

    controller = module.get<GameListController>(GameListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
