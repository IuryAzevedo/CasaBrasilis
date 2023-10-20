/*
  Warnings:

  - You are about to drop the column `banner` on the `properties` table. All the data in the column will be lost.
  - Added the required column `banner1` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner2` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner3` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner4` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "banner",
ADD COLUMN     "banner1" TEXT NOT NULL,
ADD COLUMN     "banner2" TEXT NOT NULL,
ADD COLUMN     "banner3" TEXT NOT NULL,
ADD COLUMN     "banner4" TEXT NOT NULL;
