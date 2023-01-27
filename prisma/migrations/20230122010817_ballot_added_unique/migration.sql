/*
  Warnings:

  - A unique constraint covering the columns `[ballotId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ballot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Game_ballotId_key" ON "Game"("ballotId");

-- CreateIndex
CREATE UNIQUE INDEX "ballot_id_key" ON "ballot"("id");
