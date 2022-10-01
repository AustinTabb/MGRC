import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GameListService } from './game-list.service';
import { RawgService } from 'src/rawg/rawg.service';
import { CreateMonthDto } from './create-month.dto';

@Controller('game-list')
export class GameListController {
  constructor(
    private readonly GameListService: GameListService,
    private readonly RawgService: RawgService,
  ) {}
  @Get()
  async gameIds() {
    this.GameListService.pullGameList().subscribe((res) => {
      const resultArray = res.data.results;
      let hold = [];
      resultArray.forEach((result) => hold.push(result.id.toString()));
      console.log(hold, 'testing hold');
      return hold;
      //   console.log(res.data.results[0].id, 'gameIds');
    });
  }

  @Get('/monthconsole')
  monthConsole() {
    this.GameListService.pullGameList().subscribe((res) => {
      console.log(res.data.results, 'Test?');
    });
  }

  @Get('/test')
  async rawgPull() {
    const dataIds = await this.RawgService.rawgApiPull();
    console.log(dataIds);
  }

  // @Post('/posttest')
  // async pullGameList() {
  //   const func = await this.GameListService.testFunc();
  //   return await this.GameListService.createGameList({
  //     name: 'Oct 2022',
  //     : func,
  //   });
  // }

  // @Post('gameCreate')
  // async pullGameList() {
  //   const IdList = await this.GameListService.testFunc();
  //   let gameId;
  //   for (let i = 0; i < IdList.length; i++) {
  //     // console.log(IdList[i], 'test');
  //     gameId = IdList[i];
  //     await this.GameListService.createGame({
  //       rawGId: gameId,
  //     });
  //   }
  // }

  @Post('gameCreateTest')
  async pullGameListTest(@Body() createMonthDto: CreateMonthDto) {
    const IdList = await this.GameListService.testFunc(
      createMonthDto.startDate,
      createMonthDto.endDate,
    );
    let gameId;
    for (let i = 0; i < IdList.length; i++) {
      // console.log(IdList[i], 'test');
      gameId = IdList[i];
      await this.GameListService.createGame({
        rawGId: gameId,
      });
    }
  }
}
