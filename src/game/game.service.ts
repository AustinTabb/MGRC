import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { GameList, Prisma } from '@prisma/client';
import axios from 'axios';

const apiKey = process.env['RAWG_API_KEY'];
let slugName = 'splatoon-3';
let gameId = 840768;
const urlArg = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`; //&dates=${startDate}  id=${gameId}
const trailerUrlArg = `https://api.rawg.io/api/games/${gameId}/movies?key=${apiKey}`;
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
  getGameList(
    gameListWhereUniqueInput: Prisma.GameListWhereUniqueInput,
  ): Promise<GameList | null> {
    return this.prisma.gameList.findUnique({
      where: gameListWhereUniqueInput,
    });
  }
  rawGGame(): Promise<DataResult> {
    return this.httpService.axiosRef.get(urlArg).then((res) => res?.data);
  }

  rawGGameTest(gameId): Promise<DataResult> {
    return this.httpService.axiosRef
      .get(gamesDetailUrl.replace('{gameId}', gameId))
      .then((res) => res?.data);
  }

  gameTrailers(): Promise<DataResult> {
    return this.httpService.axiosRef
      .get(trailerUrlArg)
      .then((res) => res?.data);
  }
}
