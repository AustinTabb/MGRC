/*
  Warnings:

  - You are about to drop the column `rawGIds` on the `GameList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameList" DROP COLUMN "rawGIds";

-- CreateTable
CREATE TABLE "Game" (
    "rawGId" INTEGER NOT NULL,
    "youtubeUrl" TEXT[],
    "gameListId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_rawGId_key" ON "Game"("rawGId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_gameListId_fkey" FOREIGN KEY ("gameListId") REFERENCES "GameList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
