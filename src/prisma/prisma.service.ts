import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};
  constructor(private config: ConfigService) {
    super({
      datasourceUrl: config.get("DATABASE_URL"),
    });
    //this.checkAndBuildSeed();
  }
  /* async checkAndBuildSeed() {
    try {
      if ((await this.cAE.findMany()).length) return;

      Object.keys(sectors).forEach(async (name) => {
        const caes = sectors[name];

        await this.sector.create({
          data: {
            name,
            CAE: {
              createMany: {
                data: caes,
              },
            },
          },
        });
      });
    } catch (error) {}
  } */
  async getClient(request?: Request, intern?: boolean): Promise<PrismaClient> {
    const tenant = this.extractTenantFromRequest(request);

    const cacheKey = `${tenant?.id}:${tenant?.key}`;

    let client = this.clients[cacheKey];

    const host = this.config
      .get("DATABASE_URL")
      .split("@")?.[1]
      ?.split("/")?.[0];

    const url =
      tenant?.id || tenant?.key
        ? `postgresql://${tenant?.id}:${tenant?.key}@${host}/kulanda?schema=${tenant?.id}`
        : this.config.get("DATABASE_URL");

    if (!client && url) {
      client = new PrismaClient({
        datasources: {
          db: {
            url,
          },
        },
      });

      this.clients[cacheKey] = client;
    }

    client.$use(async (params, next) => {
      tenant?.id && this.logMessage(tenant.id, JSON.stringify(params));
      return next(params);
    });

    return client;
  }

  logMessage(tenantId: string, message: string) {
    const logFilePath = `logs/${tenantId}.txt`;

    /* if (this.message === message) return;
    else
      fs.appendFile(
        logFilePath,
        `${new Date().toISOString()} - ${message}\n`,
        (err) => {
          if (err) {
            console.error("Erro ao escrever no arquivo de log:", err);
          } else {
            console.log("Log registrado com sucesso!");
            this.message = message;
          }
        }
      ); */
  }

  private extractTenantFromRequest(request: Request) {
    if (!request) return;
    // Substitua essa lógica com a lógica correta para extrair o tenantId do request
    return {
      id: request.headers["x-tenant-username"] as string,
      key: request.headers["x-tenant-key"] as string,
    };
  }

  async onModuleDestroy() {
    for (const client of Object.values(this.clients)) {
      await client.$disconnect();
    }
  }
}

const sectors = {
  "Agricultura, Produção Animal, Caça e Silvicultura": [
    { code: 11, name: "Agricultura" },
    { code: 12, name: "Produção Animal" },
    { code: 13, name: "Atividades de Apoio à Agricultura e à Produção Animal" },
    { code: 14, name: "Caça, Captura de Animais e Serviços Relacionados" },
    { code: 15, name: "Silvicultura e Exploração Florestal" },
  ],
  "Pesca e Aquicultura": [
    { code: 31, name: "Pesca" },
    { code: 32, name: "Aquicultura" },
  ],
  "Indústria Extrativa": [
    { code: 51, name: "Extração de Carvão" },
    { code: 52, name: "Extração de Lignito" },
    { code: 61, name: "Extração de Petróleo Bruto" },
    { code: 62, name: "Extração de Gás Natural" },
    { code: 71, name: "Extração de Minerais Metálicos" },
    { code: 72, name: "Extração de Minérios de Urânio e Tório" },
  ],
  "Indústrias Transformadoras": [
    { code: 101, name: "Abate de Animais, Preparação e Conservação de Carne" },
    {
      code: 102,
      name: "Preparação e Conservação de Peixe, Crustáceos e Moluscos",
    },
    { code: 103, name: "Indústrias de Transformação de Produtos Hortícolas" },
    { code: 104, name: "Fabricação de Óleos e Gorduras Vegetais e Animais" },
    { code: 105, name: "Fabricação de Produtos Lácteos" },
  ],
  Construção: [
    { code: 411, name: "Construção de Edifícios" },
    { code: 412, name: "Engenharia Civil" },
    { code: 421, name: "Construção de Vias de Transporte" },
    {
      code: 422,
      name: "Construção de Redes de Distribuição de Eletricidade e Telecomunicações",
    },
  ],
  Comércio: [
    { code: 451, name: "Comércio de Veículos Automóveis" },
    { code: 452, name: "Manutenção e Reparação de Veículos Automóveis" },
    {
      code: 453,
      name: "Comércio de Peças e Acessórios para Veículos Automóveis",
    },
    { code: 454, name: "Comércio e Reparação de Motociclos" },
    { code: 471, name: "Comércio a Retalho em Lojas" },
  ],
  "Transportes e Armazenagem": [
    { code: 491, name: "Transporte Ferroviário" },
    { code: 492, name: "Transporte Rodoviário" },
    {
      code: 493,
      name: "Transporte de Passageiros por Vias Navegáveis Interiores",
    },
    {
      code: 494,
      name: "Transporte de Mercadorias por Vias Navegáveis Interiores",
    },
    { code: 495, name: "Transportes Espaciais" },
  ],
  "Alojamento e Restauração": [
    { code: 551, name: "Hotéis e Similares" },
    {
      code: 552,
      name: "Alojamento para Férias e Outros Alojamentos de Curta Duração",
    },
    {
      code: 561,
      name: "Restaurantes e Outros Estabelecimentos de Serviços de Refeições",
    },
    {
      code: 562,
      name: "Fornecimento de Comidas para Eventos e Outras Atividades de Serviço de Alimentação",
    },
    { code: 563, name: "Estabelecimentos de Bebidas" },
  ],
  "Informação e Comunicação": [
    {
      code: 581,
      name: "Edição de Livros, Jornais e Outras Atividades de Edição",
    },
    {
      code: 591,
      name: "Atividades Cinematográficas, de Vídeo e de Programas de Televisão",
    },
    { code: 601, name: "Atividades de Rádio" },
    { code: 602, name: "Atividades de Televisão" },
    { code: 611, name: "Telecomunicações" },
  ],
  "Atividades Financeiras e de Seguros": [
    { code: 641, name: "Atividades dos Bancos Centrais" },
    { code: 642, name: "Atividades de Bancos Comerciais" },
    { code: 643, name: "Atividades de Holdings" },
    { code: 651, name: "Seguros" },
    { code: 652, name: "Resseguros" },
  ],
  "Atividades Imobiliárias": [
    { code: 681, name: "Compra e Venda de Bens Imobiliários" },
    { code: 682, name: "Arrendamento e Exploração de Imóveis" },
  ],
  "Atividades Profissionais, Científicas e Técnicas": [
    { code: 691, name: "Atividades Jurídicas" },
    {
      code: 692,
      name: "Atividades de Contabilidade, Auditoria e Consultoria Fiscal",
    },
    { code: 701, name: "Atividades de Sedes Sociais" },
    { code: 711, name: "Atividades de Arquitetura e Engenharia" },
    { code: 712, name: "Ensaios e Análises Técnicas" },
  ],
  "Administração Pública, Defesa e Segurança Social Obrigatória": [
    { code: 841, name: "Administração Pública e Defesa" },
    { code: 842, name: "Segurança Social Obrigatória" },
  ],
  Educação: [
    { code: 851, name: "Educação Pré-Escolar" },
    { code: 852, name: "Ensino Básico" },
    { code: 853, name: "Ensino Secundário" },
    { code: 854, name: "Ensino Superior" },
    { code: 855, name: "Outras Atividades Educativas" },
  ],
  "Saúde e Atividades Sociais": [
    { code: 861, name: "Atividades de Saúde Humana" },
    { code: 862, name: "Atividades Médicas e de Enfermagem" },
    { code: 869, name: "Outras Atividades de Saúde Humana" },
    {
      code: 871,
      name: "Atividades de Cuidados para Idosos e Pessoas com Deficiência",
    },
    {
      code: 872,
      name: "Atividades de Cuidados para Pessoas com Problemas Mentais",
    },
  ],
  "Artes, Entretenimento e Recreação": [
    { code: 900, name: "Atividades Artísticas, de Espetáculos, e de Cultura" },
    {
      code: 910,
      name: "Atividades de Bibliotecas, Arquivos, Museus e Outras Atividades Culturais",
    },
    { code: 920, name: "Atividades de Jogos de Fortuna e Azar" },
    { code: 931, name: "Atividades Desportivas" },
    { code: 932, name: "Outras Atividades Recreativas e de Lazer" },
  ],
};
