-- AlterTable
ALTER TABLE "GameList" ALTER COLUMN "active" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT false;
