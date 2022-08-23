import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Game } from './game/game.module';
import { GameListModule } from './game-list/game-list.module';

@Module({
  imports: [Game, GameListModule],
  providers: [PrismaService],
})
export class AppModule {}
