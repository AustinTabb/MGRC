import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

const apiKey = process.env['RAWG_API_KEY'];
const monthUrlArg = `https://api.rawg.io/api/games?key=${apiKey}`;

@Injectable()
export class ballotService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  createGame(data: Prisma.GameCreateInput[]): Promise<any> {
    console.log(data);
    return this.prisma.game.createMany({ data });
  }
  async dateSelectAdd(start, end): Promise<number[]> {
    const url = `${monthUrlArg}&dates=${start},${end}`;
    return this.httpService.axiosRef
      .get(url)
      .then((res) => res?.data?.results?.map(({ id }) => id));
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

  createballot(listName) {
    return this.prisma.ballot.create({
      data: { name: `${listName}` },
    });
  }

  async updateballot(listId: number, data) {
    return await this.prisma.ballot.update({
      where: { id: listId },
      data,
    });
  }
  async updateYouTubeUrl(url: string, rawGId: number) {
    return await this.prisma.game.update({
      where: { rawGId: rawGId },
      data: {
        youtubeUrl: url,
      },
    });
  }

  async toggleWinnerTrue(rawGId: number) {
    return await this.prisma.game.update({
      where: { rawGId: rawGId },
      data: { winner: true },
    });
  }

  async toggleWinnerFalse(rawGId: number) {
    return await this.prisma.game.update({
      where: { rawGId: rawGId },
      data: { winner: false },
    });
  }

  async toggleArchiveTrue(rawGId: number) {
    return await this.prisma.game.update({
      where: { rawGId: rawGId },
      data: { Archive: true },
    });
  }

  async toggleArchiveFalse(rawGId: number) {
    return await this.prisma.game.update({
      where: { rawGId: rawGId },
      data: { Archive: false },
    });
  }

  async toggleActiveTrue(listId: number) {
    return await this.prisma.ballot.update({
      where: { id: listId },
      data: { active: true },
    });
  }

  async toggleActiveFalse(listId: number) {
    return await this.prisma.ballot.update({
      where: { id: listId },
      data: { active: false },
    });
  }
}
