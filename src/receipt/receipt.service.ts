import { Injectable } from "@nestjs/common";
import { ReceiptType, CreateReceiptArgs, EditReceiptArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ReceiptService {
  async createReceipt(
    prisma: PrismaClient,
    { payments, ...dto }: CreateReceiptArgs
  ): Promise<ReceiptType> {

    const res = await prisma.receipt.create({
      data: {
        ...dto,
        Pyament: {
          createMany: {
            data: payments,
          },
        },
      },
    });

    if (res.id) {
      await prisma.invoice.update({
        where: {
          id: dto.invoiceId,
        },
        data: {
          status: "PAID",
        },
      });
    }

    return res;
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
  async getReceiptBySaleId(prisma: PrismaClient, saleId: string) {
    return await prisma.receipt.findMany({
      where: {
        invoice: {
          saleId,
        },
      },
    });
  }
}
