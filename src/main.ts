import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(cookieParser()); // Para analisar os cookies
  app.use(csurf({ cookie: true })); // Configura o middleware CSRF, armazenando o token em um cookie

  // Middleware customizado para definir o token CSRF nas respostas e no objeto de requisição
  app.use((req, res, next) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.locals.csrfToken = req.csrfToken();
    next();
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  await app.listen(3000);
}
bootstrap();
