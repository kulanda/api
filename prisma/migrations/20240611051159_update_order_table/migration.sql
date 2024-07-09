/*
  Warnings:

  - You are about to drop the column `bankCard` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `cash` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `change` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "bankCard",
DROP COLUMN "cash",
DROP COLUMN "change",
DROP COLUMN "totalPrice";
