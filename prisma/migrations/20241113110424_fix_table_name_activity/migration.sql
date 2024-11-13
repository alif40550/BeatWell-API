/*
  Warnings:

  - You are about to drop the `acticity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `acticity`;

-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
