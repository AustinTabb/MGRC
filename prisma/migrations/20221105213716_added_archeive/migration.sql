-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "Archive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ballot" ALTER COLUMN "updatedAt" DROP DEFAULT;
