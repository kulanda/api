/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `sales` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sales_code_key" ON "sales"("code");
