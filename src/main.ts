/* eslint-disable no-console */
import '@fastify/view';
import * as handlebars from 'handlebars';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { EnvDefaults } from 'config/env.default';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';

const APP_ENV = process.env.APP_ENV ?? EnvDefaults.APP_ENV;
const PORT = Number(process.env.PORT) || EnvDefaults.PORT;
const IS_DEV = APP_ENV === EnvDefaults.APP_ENV;

const viewsPath = join(__dirname, '..', 'views');
const publicPath = join(__dirname, '..', 'public');

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: IS_DEV }),
  );

  app.useStaticAssets({
    root: publicPath,
    prefix: '/public/',
  });

  app.setViewEngine({
    engine: { handlebars },
    templates: viewsPath,
    root: viewsPath,
    includeViewExtension: true,
    options: {
      partials: {
        unitNavBar: join('partials', 'navbar.unit.hbs'),
        unitFooter: join('partials', 'footer.unit.hbs'),
      },
    },
    defaultContext: {
      isDev: IS_DEV,
    },
  });
  await app.listen(PORT);
}

void bootstrap().catch((err: unknown) => {
  console.error('Error during bootstrap:', err);
  process.exit(1);
});
