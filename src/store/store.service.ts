import { Injectable } from "@nestjs/common";
import { CreateStoreArgs, ReportStoreType, StoreType } from "./dto";
import { ReportStoreOptionsInput } from "./dto/report-store-options.input";
import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StoreService {
  constructor(private prismaService?: PrismaService){}
  async createStore(
    prisma: PrismaClient,
    companyId: string,
    dto: CreateStoreArgs
  ): Promise<StoreType> {
    const company = await this.prismaService.company.findFirst({
      where: {
        id: companyId,
      },
    });

    let Charge = undefined;

    if (company.vatRegime === "GENERAL_REGIME")
      Charge = {
        create: [
          {
            name: "Imposto sobre o valor acrescentado",
            acronym: "IVA",
            percentage: 14,
            type: "TAX",
          },
        ],
      };

    return await prisma.store.create({
      data: {
        address: dto.address,
        designation: dto.designation,
        phone: dto.phone,
        saleType: dto.saleType,
        companyId,
        Charge: Charge,
      },
    });
  }
  async getStores(
    prisma: PrismaClient,
    companyId: string
  ): Promise<StoreType[]> {
    return await prisma.store.findMany({
      where: {
        companyId,
      },
    });
  }
  async getStore(prisma: PrismaClient, id: string): Promise<StoreType> {
    return await prisma.store.findUnique({
      where: {
        id,
      },
    });
  }
  async getStoreReport(
    prisma: PrismaClient,
    id: string,
    options?: ReportStoreOptionsInput
  ): Promise<ReportStoreType> {
    // Defina o intervalo de datas com base na opção fornecida
    let dateFilter = {};
    let totalSalesBalance = 0;
    const currentDate = new Date(options.from);
    if (options) {
      switch (options.period) {
        case "DAY":
          dateFilter = {
            gte: new Date(currentDate.setUTCHours(0, 0, 0, 0)), // Início do dia atual
            lt: new Date(currentDate.setUTCHours(24, 0, 0, 0)), // Fim do dia atual
          };
          break;
        case "WEEK":
          const startOfWeek = new Date(
            currentDate.setDate(currentDate.getDate() - currentDate.getDay())
          );
          startOfWeek.setUTCHours(0, 0, 0, 0); // Início da semana atual
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 7); // Fim da semana atual
          dateFilter = {
            gte: startOfWeek,
            lt: endOfWeek,
          };
          break;
        case "MONTH":
          const startOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
          );
          const endOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1
          );
          dateFilter = {
            gte: startOfMonth,
            lt: endOfMonth,
          };
          break;
        case "YEAR":
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
      Order: {
        some: {
          OR: [
            {
              product: {
                storeId: id,
              },
            },
            {
              service: {
                storeId: id,
              },
            },
          ],
        },
      },
      sellerId: options.sellerId,
      createdAt: dateFilter,
    };

    const sales = await prisma.sale.findMany({
      where,
      include: {
        Order: {
          include: {
            product: true,
            service: true,
          },
        },
      },
    });

    sales.forEach(({ Order }) => {
      Order.forEach(({ product, service }) => {
        if (product)
          totalSalesBalance = totalSalesBalance + Number(product.price);
        if (service)
          totalSalesBalance = totalSalesBalance + Number(service.price);
      });
    });

    return {
      sales: sales,
      totalSales: sales.length,
      totalSalesBalance,
    };
  }
}
