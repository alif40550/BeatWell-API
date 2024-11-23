/*
  Warnings:

  - Added the required column `Ingredients` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Made the column `recipe` on table `food` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `food` ADD COLUMN `Ingredients` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `recipe` VARCHAR(191) NOT NULL;
