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

const APP_ENV_DEV = 'dev';
const APP_ENV = process.env.APP_ENV ?? APP_ENV_DEV;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars,
    },
    templates: join(__dirname, '..', 'views'),
    root: join(__dirname, '..', 'views'),
    includeViewExtension: true,
    // layout: join('layouts', 'main.hbs'),
    options: {
      partials: {
        unitNavBar: join('partials', 'navbar.unit.hbs'),
        unitFooter: join('partials', 'footer.unit.hbs'),
      },
    },
    defaultContext: {
      isDev: APP_ENV === APP_ENV_DEV,
    },
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap().catch((err: unknown) => {
  console.error('Error during bootstrap:', err);
  process.exit(1);
});
