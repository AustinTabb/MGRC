import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Game } from './game/game.module';
import { ballotModule } from './ballot/ballot.module';

@Module({
  imports: [Game, ballotModule],
  providers: [PrismaService],
})
export class AppModule {}
