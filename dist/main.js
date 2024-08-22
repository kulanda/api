"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const graphql_upload_ts_1 = require("graphql-upload-ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.use("/graphql", (0, graphql_upload_ts_1.graphqlUploadExpress)({ maxFileSize: 100000000, maxFiles: 10 }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map