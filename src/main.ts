/* eslint-disable no-console */
import * as hbs from 'hbs';
import { AppModule } from './app.module';
import { EnvDefaults } from 'config/env.default';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

const PORT = Number(process.env.PORT) || EnvDefaults.PORT;
const APP_ENV = process.env.APP_ENV ?? EnvDefaults.APP_ENV;
const IS_DEV = APP_ENV === EnvDefaults.APP_ENV;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));
  hbs.localsAsTemplateData(app);
  hbs.registerHelper('isDev', () => IS_DEV);
  await app.listen(PORT);
}

void bootstrap().catch((err: unknown) => {
  console.error('Error during bootstrap:', err);
  process.exit(1);
});
