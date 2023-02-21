/*
  Warnings:

  - You are about to drop the column `Archive` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "Archive",
ADD COLUMN     "archive" BOOLEAN NOT NULL DEFAULT false;
