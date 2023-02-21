import { Game } from 'src/game/game.dto';

export class ballotDto {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  games: Game[];
}
