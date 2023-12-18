/*
  Warnings:

  - You are about to alter the column `pokedexNumber` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `pokemon` MODIFY `pokedexNumber` INTEGER NOT NULL;
