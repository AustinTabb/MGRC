import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GameService } from 'src/game/game.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameController } from './game.controller';

@Module({
  imports: [HttpModule],
  providers: [GameService, PrismaService],
  controllers: [GameController],
})
export class Game {}
