/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_ballotId_fkey";

-- DropTable
DROP TABLE "Game";

-- CreateTable
CREATE TABLE "game" (
    "rawGId" INTEGER NOT NULL,
    "votingMonth" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "youtubeUrl" TEXT[],
    "ballotId" INTEGER,
    "winner" BOOLEAN NOT NULL DEFAULT false,
    "archive" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "game_rawGId_key" ON "game"("rawGId");

-- CreateIndex
CREATE UNIQUE INDEX "game_ballotId_key" ON "game"("ballotId");

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_ballotId_fkey" FOREIGN KEY ("ballotId") REFERENCES "ballot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
