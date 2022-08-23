import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly GameService: GameService) {}
  @Get()
  month() {
    let games;
    this.GameService.games().subscribe((res) => {
      console.log(res.data.results);
      const gameList = res.data.results;
      for (const game of gameList) {
        this.GameService.createGame({
          name: game.name,
          rawG_Id: game.id,
          background_image: game.background_image,
          released: game.released,
        });
      }
    });
  }
}
