import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    credentials: true,
    allowedHeaders: [
      "Accept",
      "Authorization",
      "Content-Type",
      "X-Requested-With",
      "apollo-require-preflight",
      "x-tenant-username",
      "x-tenant-key",
    ],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  await app.listen(3000);
}
bootstrap();
