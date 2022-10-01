import { Module } from '@nestjs/common';
import { GameListService } from './game-list.service';
import { GameListController } from './game-list.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { RawgService } from 'src/rawg/rawg.service';
import { Axios } from 'axios';

@Module({
  imports: [HttpModule],
  providers: [GameListService, PrismaService, RawgService, Axios],
  controllers: [GameListController],
})
export class GameListModule {}
