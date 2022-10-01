/*
  Warnings:

  - You are about to drop the column `name` on the `GameList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameList" DROP COLUMN "name",
ADD COLUMN     "month" TEXT;
