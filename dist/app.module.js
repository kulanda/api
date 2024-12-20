"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const company_module_1 = require("./company/company.module");
const store_module_1 = require("./store/store.module");
const category_module_1 = require("./category/category.module");
const product_module_1 = require("./product/product.module");
const service_module_1 = require("./service/service.module");
const sale_module_1 = require("./sale/sale.module");
const order_module_1 = require("./order/order.module");
const sector_module_1 = require("./sector/sector.module");
const cae_module_1 = require("./cae/cae.module");
const tenant_middleware_1 = require("./tenant.middleware");
const tenant_module_1 = require("./tenant/tenant.module");
const charge_module_1 = require("./charge/charge.module");
const client_module_1 = require("./client/client.module");
const invoice_module_1 = require("./invoice/invoice.module");
const receipt_module_1 = require("./receipt/receipt.module");
const credit_note_module_1 = require("./creditNote/credit-note.module");
const supplier_module_1 = require("./supplier/supplier.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const suppliers_on_product_module_1 = require("./suppliersOnProduct/suppliers-on-product.module");
const debit_note_module_1 = require("./debitNote/debit-note.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(tenant_middleware_1.TenantMiddleware)
            .forRoutes({ path: "*", method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: "schema.gql",
                context: ({ req }) => ({ req }),
                csrfPrevention: false,
                playground: true,
                introspection: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "uploads"),
                serveRoot: "/uploads/",
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            company_module_1.CompanyModule,
            store_module_1.StoreModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            service_module_1.ServiceModule,
            sale_module_1.SaleModule,
            order_module_1.OrderModule,
            sector_module_1.SectorModule,
            cae_module_1.CaeModule,
            tenant_module_1.TenantModule,
            charge_module_1.ChargeModule,
            client_module_1.ClientModule,
            invoice_module_1.InvoiceModule,
            receipt_module_1.ReceiptModule,
            credit_note_module_1.CreditNoteModule,
            debit_note_module_1.DebitNoteModule,
            supplier_module_1.SupplierModule,
            suppliers_on_product_module_1.SupplierOnProductModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map