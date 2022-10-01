/*
  Warnings:

  - You are about to drop the column `month` on the `GameList` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `GameList` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `GameList` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "GameList" DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "GameList_name_key" ON "GameList"("name");
