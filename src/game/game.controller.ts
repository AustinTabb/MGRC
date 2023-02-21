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

  @Patch()
  async patchGame(@Body() createGamePatchDto: CreateGamePatchDto) {
    const { rawGId, ballotId, winner, Archive, youtubeUrl } =
      createGamePatchDto;
    console.log('test');
    return this.gameService.updateGame(rawGId, {
      ballotId,
      winner,
      Archive,
      youtubeUrl,
    });
  }
}
