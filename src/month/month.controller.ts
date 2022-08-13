import { Controller, Get } from '@nestjs/common';
import { MonthService } from './month.service';
import { gameService } from 'src/game/game.service';

@Controller('month')
export class MonthController {
  constructor(private readonly monthService: MonthService, gameService: gameService) {}
  @Get()
  month() {
    const games = this.monthService.games();
    games.forEach((response) => {
      console.log(response.data);
    });
  }
}
