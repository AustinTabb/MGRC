-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_ballotId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "ballotId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_ballotId_fkey" FOREIGN KEY ("ballotId") REFERENCES "ballot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
