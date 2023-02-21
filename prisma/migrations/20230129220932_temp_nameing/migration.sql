/*
  Warnings:

  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "game" DROP CONSTRAINT "game_ballotId_fkey";

-- DropTable
DROP TABLE "game";

-- CreateTable
CREATE TABLE "Game" (
    "rawGId" INTEGER NOT NULL,
    "votingMonth" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "youtubeUrl" TEXT[],
    "ballotId" INTEGER,
    "winner" BOOLEAN NOT NULL DEFAULT false,
    "Archive" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_rawGId_key" ON "Game"("rawGId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_ballotId_key" ON "Game"("ballotId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_ballotId_fkey" FOREIGN KEY ("ballotId") REFERENCES "ballot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
