/*
  Warnings:

  - You are about to drop the column `rawGIds` on the `ballot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ballot" DROP COLUMN "rawGIds";

-- CreateTable
CREATE TABLE "Game" (
    "rawGId" INTEGER NOT NULL,
    "youtubeUrl" TEXT[],
    "ballotId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_rawGId_key" ON "Game"("rawGId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_ballotId_fkey" FOREIGN KEY ("ballotId") REFERENCES "ballot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
