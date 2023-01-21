import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

const apiKey = process.env['RAWG_API_KEY'];
const monthUrlArg = `https://api.rawg.io/api/games?key=${apiKey}`;

@Injectable()
export class GameListService {
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

  async gatherGameList(listId: string) {
    const gameIdNum = parseInt(listId, 10);
    const gameList = await this.prisma.game.findMany({
      where: { gameListId: gameIdNum },
    });

    return gameList;
  }

  async gatherAllGameLists() {
    const gameLists = await this.prisma.gameList.findMany();
    return gameLists;
  }

  createGameList(listName) {
    return this.prisma.gameList.create({
      data: { name: `${listName}` },
    });
  }

  async updateGameList(listId: number, rawGId: number) {
    return await this.prisma.game.update({
      where: { rawGId: rawGId },
      data: {
        gameListId: listId,
      },
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
    return await this.prisma.gameList.update({
      where: { id: listId },
      data: { active: true },
    });
  }

  async toggleActiveFalse(listId: number) {
    return await this.prisma.gameList.update({
      where: { id: listId },
      data: { active: false },
    });
  }
}
