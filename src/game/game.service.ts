import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

const apiKey = process.env['RAWG_API_KEY'];
const gamesDetailUrl = `https://api.rawg.io/api/games/{gameId}?key=${apiKey}`;

type DataResult = {
  id: number;
  slug: string;
  name: string;
  released: number;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating;
  platforms: Platforms[];
};
type EsrbRating = {
  id: number;
  slug: string;
  name: string;
};

type Platforms = {
  platform: Platform;
  released_at: string;
  requirements: Requirements;
};
type Platform = {
  id: number;
  slug: string;
  name: string;
};
type Requirements = {
  minimum: string;
  recommenred: string;
};

@Injectable()
export class GameService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  rawGGameDetails(gameId): Promise<DataResult> {
    return this.httpService.axiosRef
      .get(gamesDetailUrl.replace('{gameId}', gameId))
      .then((res) => res?.data);
  }

  async updateGame(rawGId: number, data: {}) {
    return this.prisma.game.update({
      where: { rawGId: rawGId },
      data,
    });
  }
  // async updateGame(rawGId: number) {
  //   return await this.prisma.game.update({
  //     where: { rawGId: rawGId },
  //     data: {},
  //   });
  // }
}
