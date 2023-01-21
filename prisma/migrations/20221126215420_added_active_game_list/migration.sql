/*
  Warnings:

  - Added the required column `active` to the `GameList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameList" ADD COLUMN     "active" BOOLEAN NOT NULL;
