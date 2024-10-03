import { Injectable } from "@nestjs/common";
import {
  InvoiceType,
  CreateInvoiceArgs,
  EditInvoiceArgs,
  FilterInvoiceInput,
} from "./dto";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class InvoiceService {
  async createInvoice(
    prisma: PrismaClient,
    { amount, retention, ...dto }: CreateInvoiceArgs
  ): Promise<InvoiceType> {
    const rt = (Number(retention ?? 0) * Number(amount)) / 100;

    return await prisma.invoice.create({
      data: {
        ...dto,
        amount: Number(amount ?? 0) - rt,
        retention,
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
  async getInvoices(
    prisma: PrismaClient,
    filter?: FilterInvoiceInput
  ): Promise<InvoiceType[]> {
    const OR = [];

    if (filter?.number) {
      OR.push({
        number: filter?.number,
      });
    }

    const where: Prisma.InvoiceScalarWhereInput = {
      OR: OR.length ? OR : undefined,
      AND: {
        createdAt: {
          gte: filter?.period?.start,
          lte: filter?.period?.end,
        },
      },
    };

    if (filter?.paginate)
      return await prisma.invoice.findMany({
        skip: (filter.paginate.page - 1) * filter.paginate.limit,
        take: filter.paginate.limit,
        where,
      });
    else
      return await prisma.invoice.findMany({
        where,
      });
  }
  async getInvoice(prisma: PrismaClient, id: string): Promise<InvoiceType> {
    return await prisma.invoice.findUnique({
      where: {
        id,
      },
    });
  }
  async getInvoiceBySaleId(
    prisma: PrismaClient,
    saleId: string
  ): Promise<InvoiceType> {
    return await prisma.invoice.findFirst({
      where: {
        sale: {
          id: saleId,
        },
      },
    });
  }
}
