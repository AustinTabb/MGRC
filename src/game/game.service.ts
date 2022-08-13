import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { game, Prisma } from '@prisma/client';

@Injectable()
export class gameService {
  constructor(private prisma: PrismaService) {}

  async game(
    gameWhereUniqueInput: Prisma.gameWhereUniqueInput,
  ): Promise<game | null> {
    return this.prisma.game.findUnique({
      where: gameWhereUniqueInput,
    });
  }

  async games(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.gameWhereUniqueInput;
    where?: Prisma.gameWhereInput;
    orderBy?: Prisma.gameOrderByWithRelationInput;
  }): Promise<game[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.game.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createGame(data: Prisma.gameCreateInput): Promise<game> {
    return this.prisma.game.create({
      data,
    });
  }

  async updateGame(params: {
    where: Prisma.gameWhereUniqueInput;
    data: Prisma.gameUpdateInput;
  }): Promise<game> {
    const { where, data } = params;
    return this.prisma.game.update({
      data,
      where,
    });
  }

  async deleteGame(where: Prisma.gameWhereUniqueInput): Promise<game> {
    return this.prisma.game.delete({
      where,
    });
  }
}
