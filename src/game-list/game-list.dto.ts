import { Game } from 'src/game/game.dto';

export class GameListDto {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  games: Game[];
}
