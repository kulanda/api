-- DropIndex
DROP INDEX "sales_code_key";

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "code" DROP DEFAULT;
DROP SEQUENCE "sales_code_seq";
