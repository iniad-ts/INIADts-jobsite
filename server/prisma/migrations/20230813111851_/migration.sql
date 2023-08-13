/*
  Warnings:

  - You are about to drop the column `userName` on the `Member` table. All the data in the column will be lost.
  - Added the required column `displayName` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "userName",
ADD COLUMN     "displayName" TEXT NOT NULL;
