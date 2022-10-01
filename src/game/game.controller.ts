import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';
import { GameList as GameListModel } from '@prisma/client';
import { Game } from './game.module';

let testHold = 'Oct 2022';
@Controller('game')
export class GameController {
  constructor(private readonly GameService: GameService) {}

  @Get('list/:id')
  async getGameList(@Param('id') id: string): Promise<GameListModel> {
    return this.GameService.getGameList({ id: Number(id) });
  }

  @Get('details')
  async getDetails(): Promise<any> {
    // let hold = this.GameService.rawGGame();
    return this.GameService.rawGGame();
  }

  @Get('detailsTest/:gameId')
  async getDetailsTest(@Param('gameId') gameId: number): Promise<any> {
    return this.GameService.rawGGameTest(gameId);
  }

  // @Get('trailers')
  // async getTrailers(): Promise<any> {
  //   return this.GameService.gameTrailers();
  // }
}
