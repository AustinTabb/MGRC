import { Module } from '@nestjs/common';
import { GameListService } from './game-list.service';
import { GameListController } from './game-list.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { Axios } from 'axios';

@Module({
  imports: [HttpModule],
  providers: [GameListService, PrismaService, Axios],
  controllers: [GameListController],
})
export class GameListModule {}
