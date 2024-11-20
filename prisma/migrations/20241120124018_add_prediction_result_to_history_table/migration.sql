/*
  Warnings:

  - Added the required column `result` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `history` ADD COLUMN `result` VARCHAR(191) NOT NULL;
