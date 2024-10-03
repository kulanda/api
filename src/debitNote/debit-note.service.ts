import { Injectable } from "@nestjs/common";
import { DebitNoteType, CreateDebitNoteArgs, EditDebitNoteArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DebitNoteService {
  async createDebitNote(
    prisma: PrismaClient,
    { payments, invoiceId, orders, ...dto }: CreateDebitNoteArgs
  ): Promise<DebitNoteType> {
    return await prisma.debitNote.create({
      data: {
        ...dto,
        invoice: {
          connect: {
            id: invoiceId,
          },
        },
        Order: {
          createMany: {
            data: orders,
          },
        },
        Payment: {
          createMany: {
            data: payments,
          },
        },
      },
    });
  }
  async editDebitNote(
    prisma: PrismaClient,
    { id, ...dto }: EditDebitNoteArgs
  ): Promise<DebitNoteType> {
    return await prisma.debitNote.update({
      data: {
        ...dto,
      },
      where: {
        id,
      },
    });
  }
  async getDebitNotes(prisma: PrismaClient): Promise<DebitNoteType[]> {
    return await prisma.debitNote.findMany();
  }
  async getDebitNote(prisma: PrismaClient, id: string): Promise<DebitNoteType> {
    return await prisma.debitNote.findUnique({
      where: {
        id,
      },
    });
  }
  async getDebitNoteBySaleId(prisma: PrismaClient, saleId: string) {
    return await prisma.debitNote.findFirst({
      where: {
        invoice: {
          saleId,
        },
      },
    });
  }
}
