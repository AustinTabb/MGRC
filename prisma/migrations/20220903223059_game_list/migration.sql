/*
  Warnings:

  - You are about to drop the `_gameTogame_platform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game_platform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `short_screenshots` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_gameTogame_platform" DROP CONSTRAINT "_gameTogame_platform_A_fkey";

-- DropForeignKey
ALTER TABLE "_gameTogame_platform" DROP CONSTRAINT "_gameTogame_platform_B_fkey";

-- DropForeignKey
ALTER TABLE "short_screenshots" DROP CONSTRAINT "short_screenshots_gameId_fkey";

-- DropTable
DROP TABLE "_gameTogame_platform";

-- DropTable
DROP TABLE "game";

-- DropTable
DROP TABLE "game_platform";

-- DropTable
DROP TABLE "short_screenshots";

-- CreateTable
CREATE TABLE "GameList" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "rawGIds" INTEGER[],

    CONSTRAINT "GameList_pkey" PRIMARY KEY ("id")
);
