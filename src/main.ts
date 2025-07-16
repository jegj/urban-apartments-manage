/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
import '@fastify/view';
// import * as expressHandlebars from 'express-handlebars';
import * as hbs from 'hbs';
import { AppModule } from './app.module';
import { EnvDefaults } from 'config/env.default';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

const PORT = Number(process.env.PORT) || EnvDefaults.PORT;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  // app.set('view options', {
  //   layout: 'main',
  //   layoutsDir: join(__dirname, '..', 'views', 'layouts'),
  // });
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));
  /*
  appp.engine(
    'hbs',
    expressHandlebars.engine({
      extname: 'hbs',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials'),
    }),
  );
  */
  await app.listen(PORT);
}

void bootstrap().catch((err: unknown) => {
  console.error('Error during bootstrap:', err);
  process.exit(1);
});
