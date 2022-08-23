import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { game, Prisma } from '@prisma/client';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

const apiKey = process.env['RAWG_API_KEY'];
let startDate = '2022-09-01'; //2022-09-01
let endDate = '2022-09-30'; //2022-09-30
const urlArg = `https://api.rawg.io/api/games?key=${apiKey}&dates=${startDate},${endDate}`;

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
type Data = {
  count: number;
  next: string;
  previous: string;
  results: DataResult[];
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
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}

  async game(
    gameWhereUniqueInput: Prisma.gameWhereUniqueInput,
  ): Promise<game | null> {
    return this.prisma.game.findUnique({
      where: gameWhereUniqueInput,
    });
  }

  async createGame(data: Prisma.gameCreateInput): Promise<game> {
    return this.prisma.game.create({
      data,
    });
  }

  async updateGame(params: {
    where: Prisma.gameWhereUniqueInput;
    data: Prisma.gameUpdateInput;
  }): Promise<game> {
    const { where, data } = params;
    return this.prisma.game.update({
      data,
      where,
    });
  }

  async deleteGame(where: Prisma.gameWhereUniqueInput): Promise<game> {
    return this.prisma.game.delete({
      where,
    });
  }

  games(): Observable<AxiosResponse<Data>> {
    return this.httpService.get(urlArg);
  }
}
