import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { graphqlUploadExpress } from "graphql-upload-ts";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  app.use(
    "/graphql",
    graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 10 })
  );

  await app.listen(3000);
}
bootstrap();
