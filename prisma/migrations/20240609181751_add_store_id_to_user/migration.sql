-- AlterTable
ALTER TABLE "users" ADD COLUMN     "storeId" TEXT,
ALTER COLUMN "username" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
