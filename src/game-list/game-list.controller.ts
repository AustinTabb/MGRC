import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { GameListService } from './game-list.service';
import { CreateMonthDto } from './create-month.dto';

@Controller('game-list')
export class GameListController {
  constructor(private readonly gameListService: GameListService) {}

  @Get('gatherGameList/:gameListId')
  async pullGameListDb(@Param('gameListId') gameListId: string): Promise<any> {
    return await this.gameListService.gatherGameList(gameListId);
  }
  // TO DO: Make DTO isNumber()
  // https://docs.nestjs.com/techniques/validation

  @Get('gatherAllGameLists')
  async collectAllGameLists() {
    return await this.gameListService.gatherAllGameLists();
  }

  @Post('gameListCreate')
  async gamelistcreate(
    @Body() createMonthDto: CreateMonthDto,
    @Body('listName') listName: string,
  ) {
    const idList = await this.gameListService.dateSelectAdd(
      createMonthDto.startDate,
      createMonthDto.endDate,
    );
    const games = idList.map((rawGId) => ({
      rawGId,
      votingMonth: listName,
    }));
    const list = await this.gameListService.createGameList(listName);
    return this.gameListService.createGame(games);
  }

  @Patch('gameListUpdate')
  async updateGameList(
    @Body('listId') listId: number,
    @Body('rawGId') rawGId: number,
  ) {
    return await this.gameListService.updateGameList(listId, rawGId);
  }

  @Patch('gameYouTubeUpdate')
  async updateYouTubeUrl(
    @Body('youtubeUrl') youtubeUrl: string,
    @Body('rawGId') rawGId: number,
  ) {
    return await this.gameListService.updateYouTubeUrl(youtubeUrl, rawGId);
  }

  @Patch('toggleWinnerTrue')
  async toggleWinnerTrue(@Body('rawGId') rawGId: number) {
    return await this.gameListService.toggleWinnerTrue(rawGId);
  }

  @Patch('toggleWinnerFalse')
  async toggleWinnerFalse(@Body('rawGId') rawGId: number) {
    return await this.gameListService.toggleWinnerFalse(rawGId);
  }

  @Patch('toggleArchiveTrue')
  async toggleArchiveTrue(@Body('rawGId') rawGId: number) {
    return await this.gameListService.toggleArchiveTrue(rawGId);
  }

  @Patch('toggleArchiveFalse')
  async toggleArchiveFalse(@Body('rawGId') rawGId: number) {
    return await this.gameListService.toggleArchiveFalse(rawGId);
  }

  @Patch('toggleActiveTrue')
  async toggleActiveTrue(@Body('listId') listID: number) {
    return await this.gameListService.toggleActiveTrue(listID);
  }

  @Patch('toggleActiveFalse')
  async toggleActiveFalse(@Body('listId') listID: number) {
    return await this.gameListService.toggleActiveFalse(listID);
  }
}
