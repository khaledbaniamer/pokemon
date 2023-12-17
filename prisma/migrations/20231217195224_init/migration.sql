/*
  Warnings:

  - You are about to drop the column `CP39` on the `pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `CP40` on the `pokemon` table. All the data in the column will be lost.
  - Added the required column `cp39` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cp40` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemon` DROP COLUMN `CP39`,
    DROP COLUMN `CP40`,
    ADD COLUMN `cp39` INTEGER NOT NULL,
    ADD COLUMN `cp40` INTEGER NOT NULL;
