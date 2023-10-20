/*
  Warnings:

  - You are about to drop the column `banner1` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `banner2` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `banner3` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `banner4` on the `properties` table. All the data in the column will be lost.
  - Added the required column `banner` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "banner1",
DROP COLUMN "banner2",
DROP COLUMN "banner3",
DROP COLUMN "banner4",
ADD COLUMN     "banner" TEXT NOT NULL;
