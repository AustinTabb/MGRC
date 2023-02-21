import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMonthDto } from './create-month.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { error } from 'console';

const apiKey = process.env['RAWG_API_KEY'];
const monthUrlArg = `https://api.rawg.io/api/games?key=${apiKey}`;

@Injectable()
export class ballotService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  createGame(data: Prisma.GameCreateInput[]): Promise<any> {
    return this.prisma.game.createMany({ data });
  }

  async dateSelectAdd(
    start: CreateMonthDto['startDate'],
    end: CreateMonthDto['endDate'],
  ) {
    try {
      const url = `${monthUrlArg}&dates=${start},${end}`;
      return this.httpService.axiosRef
        .get(url)
        .then((res) => res?.data?.results?.map(({ id }) => id));
    } catch (error) {}
    throw console.error('test error');
  }

  async gatherballot(listId: number) {
    const ballotId = listId;
    const ballot = await this.prisma.ballot.findUnique({
      where: { id: ballotId },
    });
    return ballot;
  }

  async gatherAllballots() {
    const ballots = await this.prisma.ballot.findMany();
    return ballots;
  }

  async create(listName, callBackData) {
    try {
      if (callBackData) {
        const gameList = await this.createGame(callBackData);
      }
      const ballot = await this.prisma.ballot.create({
        data: { name: `${listName}` },
      });
      return ballot;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Name Taken');
        }
      }
    }
    throw error;
  }

  async createMonth(listName) {
    try {
      const ballot = await this.prisma.ballot.create({
        data: { name: `${listName}` },
      });
      return ballot;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Name Taken');
        }
      }
    }
    throw error;
  }

  async updateballot(listId: number, data: { name: string; active: boolean }) {
    try {
      const ballotPatch = await this.prisma.ballot.update({
        where: { id: listId },
        data: {
          active: data.active,
          name: data.name,
        },
      });
      return ballotPatch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('No Ballot Id Exists');
      }
    }
    throw error;
  }
}
