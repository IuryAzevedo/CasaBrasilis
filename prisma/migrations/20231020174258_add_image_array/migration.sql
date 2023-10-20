/*
  Warnings:

  - You are about to drop the column `banner` on the `properties` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "banner",
ADD COLUMN     "imagePaths" TEXT[];
