import { Injectable } from "@nestjs/common";
import {
  CreditNoteType,
  CreateCreditNoteArgs,
  EditCreditNoteArgs,
} from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CreditNoteService {
  async createCreditNote(
    prisma: PrismaClient,
    { orders, invoiceId, payments, ...dto }: CreateCreditNoteArgs
  ): Promise<CreditNoteType> {
    return await prisma.creditNote.create({
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
  async editCreditNote(
    prisma: PrismaClient,
    { id, ...dto }: EditCreditNoteArgs
  ): Promise<CreditNoteType> {
    return await prisma.creditNote.update({
      data: {
        ...dto,
      },
      where: {
        id,
      },
    });
  }
  async getCreditNotes(prisma: PrismaClient): Promise<CreditNoteType[]> {
    return await prisma.creditNote.findMany();
  }
  async getCreditNote(
    prisma: PrismaClient,
    id: string
  ): Promise<CreditNoteType> {
    return await prisma.creditNote.findUnique({
      where: {
        id,
      },
    });
  }
  async getCreditNoteBySaleId(prisma: PrismaClient, saleId: string) {
    return await prisma.creditNote.findMany({
      where: {
        invoice: {
          saleId,
        },
      },
    });
  }
}
