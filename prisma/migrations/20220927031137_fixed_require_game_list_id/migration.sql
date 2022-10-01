-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_gameListId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "gameListId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_gameListId_fkey" FOREIGN KEY ("gameListId") REFERENCES "GameList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
