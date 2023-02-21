/*
  Warnings:

  - Made the column `ballotId` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_ballotId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "ballotId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_ballotId_fkey" FOREIGN KEY ("ballotId") REFERENCES "ballot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
