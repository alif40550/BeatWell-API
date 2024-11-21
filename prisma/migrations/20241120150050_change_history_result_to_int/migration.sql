/*
  Warnings:

  - You are about to alter the column `result` on the `history` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `history` MODIFY `result` INTEGER NOT NULL;
