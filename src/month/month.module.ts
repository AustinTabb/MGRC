import { Module } from '@nestjs/common';
import { MonthService } from './month.service';
import { MonthController } from './month.controller';
import { HttpModule } from '@nestjs/axios';
import { gameService } from 'src/game/game.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [MonthService, gameService, PrismaService],
  controllers: [MonthController],
})
export class Month {}
