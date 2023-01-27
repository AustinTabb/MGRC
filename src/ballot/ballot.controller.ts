import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ballotService } from './ballot.service';
import { CreateMonthDto } from './create-month.dto';
import { CreateBallotPatchDto } from './ballotPatch.dto';

@Controller('ballot')
export class ballotController {
  constructor(private readonly ballotService: ballotService) {}

  @Get()
  async collectAllballots() {
    return await this.ballotService.gatherAllballots();
  }

  @Get(':ballotId')
  async pullballotDb(@Param('ballotId') ballotId: string): Promise<any> {
    console.log(ballotId, 'test');
    return await this.ballotService.gatherballot(parseInt(ballotId));
  }

  @Post('ballotCreate')
  async ballotcreate(
    @Body() createMonthDto: CreateMonthDto,
    @Body('listName') listName: string,
  ) {
    const idList = await this.ballotService.dateSelectAdd(
      createMonthDto.startDate,
      createMonthDto.endDate,
    );
    const games = idList.map((rawGId) => ({
      rawGId,
      votingMonth: listName,
    }));
    const list = await this.ballotService.createballot(listName);
    return this.ballotService.createGame(games);
  }

  // Create DTO and combine all Patches
  @Patch(':id')
  async patchBallot(
    @Body() createBallotPatchDto: CreateBallotPatchDto,
    @Param('ballotId') ballotId: number,
  ) {
    return this.ballotService.updateballot(ballotId, createBallotPatchDto);
  }

  @Patch('ballotUpdate')
  async updateballot(
    @Body('listId') listId: number,
    @Body('rawGId') rawGId: number,
  ) {
    return await this.ballotService.updateballot(listId, rawGId);
  }

  @Patch('toggleArchiveTrue')
  async toggleArchiveTrue(@Body('rawGId') rawGId: number) {
    return await this.ballotService.toggleArchiveTrue(rawGId);
  }

  @Patch('toggleArchiveFalse')
  async toggleArchiveFalse(@Body('rawGId') rawGId: number) {
    return await this.ballotService.toggleArchiveFalse(rawGId);
  }
}
