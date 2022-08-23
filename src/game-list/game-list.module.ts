import { Module } from '@nestjs/common';
import { GameListService } from './game-list.service';
import { GameListController } from './game-list.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GameListService],
  controllers: [GameListController],
})
export class GameListModule {}
