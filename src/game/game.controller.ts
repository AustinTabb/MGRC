import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('details/:gameId')
  async getDetailsDetails(@Param('gameId') gameId: number): Promise<any> {
    return this.gameService.rawGGameDetails(gameId);
  }
}
