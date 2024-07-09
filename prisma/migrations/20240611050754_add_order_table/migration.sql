/*
  Warnings:

  - You are about to drop the column `saleId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `saleId` on the `services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_saleId_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_saleId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "saleId";

-- AlterTable
ALTER TABLE "services" DROP COLUMN "saleId";

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "change" DECIMAL(65,30) DEFAULT 0,
    "cash" DECIMAL(65,30),
    "bankCard" DECIMAL(65,30),
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "saleId" TEXT NOT NULL,
    "productId" TEXT,
    "serviceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
