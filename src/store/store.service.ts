import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreArgs, ReportStoreType, StoreType } from './dto';
import { ReportStoreOptionsInput } from './dto/report-store-options.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class StoreService {
  async createStore(prisma: PrismaService,userId: string, dto: CreateStoreArgs): Promise<StoreType> {
    return await prisma.store.create({
      data: {
        address: dto.address,
        designation: dto.designation,
        phone: dto.phone,
        company: {
          connect: {
            id: dto.companyId,
            userId,
          },
        },
      },
    });
  }
  async getStores(prisma: PrismaService,companyId: string): Promise<StoreType[]> {
    return await prisma.store.findMany({
      where: {
        companyId,
      },
    });
  }
  async getStore(prisma: PrismaService, id: string): Promise<StoreType> {
    return await prisma.store.findUnique({
      where: {
        id,
      },
    });
  }
  async getStoreReport(
    prisma: PrismaService,
    id: string,
    options?: ReportStoreOptionsInput,
  ): Promise<ReportStoreType> {
    // Defina o intervalo de datas com base na opção fornecida
    let dateFilter = {};
    let totalSalesBalance = 0;
    const currentDate = new Date(options.from);
    if (options) {
      switch (options.period) {
        case 'DAY':
          dateFilter = {
            gte: new Date(currentDate.setUTCHours(0, 0, 0, 0)), // Início do dia atual
            lt: new Date(currentDate.setUTCHours(24, 0, 0, 0)), // Fim do dia atual
          };
          break;
        case 'WEEK':
          const startOfWeek = new Date(
            currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
          );
          startOfWeek.setUTCHours(0, 0, 0, 0); // Início da semana atual
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 7); // Fim da semana atual
          dateFilter = {
            gte: startOfWeek,
            lt: endOfWeek,
          };
          break;
        case 'MONTH':
          const startOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1,
          );
          const endOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1,
          );
          dateFilter = {
            gte: startOfMonth,
            lt: endOfMonth,
          };
          break;
        case 'YEAR':
          const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
          const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1);
          dateFilter = {
            gte: startOfYear,
            lt: endOfYear,
          };
          break;
        default:
          break;
      }
    }

    const where: Prisma.SaleWhereInput = {
      seller: {
        storeId: id,
      },
      sellerId: options.sellerId,
      createdAt: dateFilter,
    };

    const sales = await prisma.sale.findMany({
      where,
    });

    sales.forEach((sale) => (totalSalesBalance += Number(sale.totalPrice)));

    return {
      totalSales: sales.length,
      sales,
      totalSalesBalance: Number(Number(totalSalesBalance).toFixed(2)),
    };
  }
}
