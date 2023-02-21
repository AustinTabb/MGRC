import { Module } from '@nestjs/common';
import { ballotService } from './ballot.service';
import { ballotController } from './ballot.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { Axios } from 'axios';

@Module({
  imports: [HttpModule],
  providers: [ballotService, PrismaService, Axios],
  controllers: [ballotController],
})
export class ballotModule {}
