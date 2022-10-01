import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameList, Game, Prisma } from '@prisma/client';

const apiKey = process.env['RAWG_API_KEY'];
let startDate = '2022-11-01'; //2022-09-01
let endDate = '2022-11-30'; //2022-09-30
const urlArg = `https://api.rawg.io/api/games?key=${apiKey}&dates=${startDate},${endDate}`;
const monthUrlArg = `https://api.rawg.io/api/games?key=${apiKey}`;

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
export class GameListService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  pullGameList(): Observable<AxiosResponse<Data>> {
    return this.httpService.get(urlArg);
  }

  async createGameList(data: Prisma.GameListCreateInput): Promise<GameList> {
    return this.prisma.gameList.create({
      data,
    });
  }

  async createGame(data: Prisma.GameCreateInput): Promise<Game> {
    return this.prisma.game.create({
      data,
    });
  }

  // pullGameListObservable(): Observable<AxiosResponse<Data>> {
  //   return this.httpService.get(urlArg).pipe(
  //     map((response) => response.data),
  //     map((data) => data.results),
  //     map((results) => results.map(({ id }) => id)),
  //   );
  // }

  testFunc(start, end): Promise<number[]> {
    let url = `${monthUrlArg}&dates=${start},${end}`;
    return this.httpService.axiosRef
      .get(url)
      .then((res) => res?.data?.results?.map(({ id }) => id));
  }

  //   async extractIds(data: any): Promise<GameList> {
  //     return new Promise<any>((resolve, reject) => {
  //       resolve(console.log(data));
  //     });
  //   }

  //   this.httpService.axiosRef.get(urlArg).then(res => res.?data.?results.?map(({id}) => id))
}
