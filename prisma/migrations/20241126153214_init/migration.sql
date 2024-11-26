/*
  Warnings:

  - Made the column `detail` on table `activity` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `activity` MODIFY `detail` VARCHAR(191) NOT NULL;
