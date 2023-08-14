/*
  Warnings:

  - You are about to drop the column `links` on the `Member` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "links",
ADD COLUMN     "socialLinks" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
