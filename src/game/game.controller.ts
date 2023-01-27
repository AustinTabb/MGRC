import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGamePatchDto } from './gamePatch.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('details/:gameId')
  async getDetailsDetails(@Param('gameId') gameId: number): Promise<any> {
    return this.gameService.rawGGameDetails(gameId);
  }

  @Patch(':rawGId')
  async patchGame(
    @Body() createGamePatchDto: CreateGamePatchDto,
    @Param('rawGId') rawGId: string,
  ) {
    return this.gameService.updateGame(parseInt(rawGId), createGamePatchDto);
  }
}
