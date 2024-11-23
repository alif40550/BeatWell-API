/*
  Warnings:

  - You are about to drop the `food` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `food`;

-- CreateTable
CREATE TABLE `Trivia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trivia` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
