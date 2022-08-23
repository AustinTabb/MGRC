import { Controller, Get } from '@nestjs/common';
import { GameListService } from './game-list.service';

@Controller('game-list')
export class GameListController {
  constructor(private readonly GameListService: GameListService) {}
  @Get()
  gameIds() {
    this.GameListService.pullGameList().subscribe((res) => {
      const resultArray = res.data.results;
      resultArray.forEach((result) => console.log(result.id, 'gameids'));
      //   console.log(res.data.results[0].id, 'gameIds');
    });
  }
  @Get('/monthconsole')
  monthConsole() {
    this.GameListService.pullGameList().subscribe((res) => {
      console.log(res.data.results, 'Test?');
    });
  }
}
