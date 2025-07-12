/* eslint-disable no-console */
import '@fastify/view';
import * as handlebars from 'handlebars';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';

const DEFAULT_APP_ENV_DEV = 'dev';
const DEFAULT_PORT = 3000;

const APP_ENV = process.env.APP_ENV ?? DEFAULT_APP_ENV_DEV;
const PORT = Number(process.env.PORT) || DEFAULT_PORT;
const IS_DEV = APP_ENV === DEFAULT_APP_ENV_DEV;

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
