import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
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
    return await this.ballotService.gatherballot(parseInt(ballotId));
  }

  @HttpCode(HttpStatus.OK)
  @Post('Create')
  async create(
    @Body('name') name: string,
    @Body() createMonthDto: CreateMonthDto,
  ) {
    const votingMonth = createMonthDto.startDate;
    const idList = await this.ballotService.dateSelectAdd(
      createMonthDto.startDate,
      createMonthDto.endDate,
    );
    const games = idList.map((rawGId) => ({
      rawGId,
      votingMonth: votingMonth,
    }));
    return this.ballotService.create(name, games);
  }

  @Patch()
  async patchBallot(@Body() createBallotPatchDto: CreateBallotPatchDto) {
    const { id, name, active } = createBallotPatchDto;

    return this.ballotService.updateballot(id, { name, active });
  }
}
