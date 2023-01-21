-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "Archive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "GameList" ALTER COLUMN "updatedAt" DROP DEFAULT;
