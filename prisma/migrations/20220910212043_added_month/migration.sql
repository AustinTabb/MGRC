/*
  Warnings:

  - You are about to drop the column `name` on the `ballot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ballot" DROP COLUMN "name",
ADD COLUMN     "month" TEXT;
