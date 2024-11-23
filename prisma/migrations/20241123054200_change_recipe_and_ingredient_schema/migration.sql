/*
  Warnings:

  - You are about to alter the column `recipe` on the `healthyfood` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `ingredient` on the `healthyfood` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `healthyfood` MODIFY `recipe` JSON NOT NULL,
    MODIFY `ingredient` JSON NOT NULL;
