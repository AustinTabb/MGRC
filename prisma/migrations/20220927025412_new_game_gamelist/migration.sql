/*
  Warnings:

  - Made the column `gameListId` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_gameListId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "gameListId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_gameListId_fkey" FOREIGN KEY ("gameListId") REFERENCES "GameList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
