-- AlterTable
ALTER TABLE "ballot" ALTER COLUMN "active" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT false;
