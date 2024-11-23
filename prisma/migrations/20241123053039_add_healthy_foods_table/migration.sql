-- CreateTable
CREATE TABLE `HealthyFood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `recipe` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `ingredient` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
