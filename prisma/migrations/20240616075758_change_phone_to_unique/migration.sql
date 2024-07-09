/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `CAEs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CAEs" DROP COLUMN "code",
ADD COLUMN     "code" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
