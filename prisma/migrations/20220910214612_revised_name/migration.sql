/*
  Warnings:

  - You are about to drop the column `month` on the `ballot` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `ballot` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `ballot` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ballot" DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ballot_name_key" ON "ballot"("name");
