import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: "*",
      credentials: true,
      // all headers that client are allowed to use
      allowedHeaders: [
        "Accept",
        "Authorization",
        "Content-Type",
        "X-Requested-With",
        "apollo-require-preflight",
        "x-tenant-username",
        "x-tenant-key"
      ],
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  await app.listen(3000);
}
bootstrap();
