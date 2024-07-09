/*
  Warnings:

  - You are about to drop the column `productId` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_productId_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_serviceId_fkey";

-- DropIndex
DROP INDEX "users_fullName_key";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "saleId" TEXT;

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "productId",
DROP COLUMN "quantity",
DROP COLUMN "serviceId";

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "saleId" TEXT;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE SET NULL ON UPDATE CASCADE;
