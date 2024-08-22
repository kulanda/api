import { Injectable } from "@nestjs/common";
import { InvoiceType, CreateInvoiceArgs, EditInvoiceArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class InvoiceService {
  async createInvoice(
    prisma: PrismaClient,
    dto: CreateInvoiceArgs
  ): Promise<InvoiceType> {
    return await prisma.invoice.create({
      data: {
        ...dto,
      },
    });
  }
  async editInvoice(
    prisma: PrismaClient,
    { id, ...dto }: EditInvoiceArgs
  ): Promise<InvoiceType> {
    return await prisma.invoice.update({
      data: {
        ...dto,
      },
      where: {
        id,
      },
    });
  }
  async getInvoices(prisma: PrismaClient): Promise<InvoiceType[]> {
    return await prisma.invoice.findMany();
  }
  async getInvoice(prisma: PrismaClient, id: string): Promise<InvoiceType> {
    return await prisma.invoice.findUnique({
      where: {
        id,
      },
    });
  }
}
