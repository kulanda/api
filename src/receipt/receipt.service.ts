import { Injectable } from "@nestjs/common";
import { ReceiptType, CreateReceiptArgs, EditReceiptArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ReceiptService {
  async createReceipt(
    prisma: PrismaClient,
    { payments, ...dto }: CreateReceiptArgs
  ): Promise<ReceiptType> {
    const invoice = await prisma.invoice.findUnique({
      where: {
        id: dto.invoiceId,
      },
    });

    return await prisma.receipt.create({
      data: {
        ...dto,
        amount: invoice.amount,
        PyamentOnReceipt: {
          create: payments.map((payment) => ({
            ...payment,
          })),
        },
      },
    });
  }
  async editReceipt(
    prisma: PrismaClient,
    { id, ...dto }: EditReceiptArgs
  ): Promise<ReceiptType> {
    return await prisma.receipt.update({
      data: {
        ...dto,
      },
      where: {
        id,
      },
    });
  }
  async getReceipts(prisma: PrismaClient): Promise<ReceiptType[]> {
    return await prisma.receipt.findMany();
  }
  async getReceipt(prisma: PrismaClient, id: string): Promise<ReceiptType> {
    return await prisma.receipt.findUnique({
      where: {
        id,
      },
    });
  }
}
