import { Module } from '@nestjs/common';
import { Month } from './month/month.module';

import { gameService } from './game/game.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [Month],
  controllers: [],
  providers: [gameService, PrismaService],
})
export class AppModule {}
