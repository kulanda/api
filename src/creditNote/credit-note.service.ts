import { Injectable } from "@nestjs/common";
import { CreditNoteType, CreateCreditNoteArgs, EditCreditNoteArgs } from "./dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CreditNoteService {
  async createCreditNote(
    prisma: PrismaClient,
    dto: CreateCreditNoteArgs
  ): Promise<CreditNoteType> {
    return await prisma.creditNote.create({
      data: {
        ...dto,
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
  async getCreditNote(prisma: PrismaClient, id: string): Promise<CreditNoteType> {
    return await prisma.creditNote.findUnique({
      where: {
        id,
      },
    });
  }
}
