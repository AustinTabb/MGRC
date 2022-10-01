import { Injectable } from '@nestjs/common';
import { GameList } from '@prisma/client';
import Axios from 'axios';

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
export class RawgService {
  constructor() {}

  async rawgApiPull(): Promise<Data | null> {
    let response = null;
    try {
      response = await Axios.get(urlArg);
      console.log(response, 'Test Response');
    } catch (error) {}
    return response;
  }
}
