import * as path from 'path';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { EnvDefaults } from 'config/env.default';
import { Module } from '@nestjs/common';
import { UnitModule } from './unit/unit.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.getOrThrow('FALLBACK_LANGUAGE'),
        loaderOptions: {
          path: path.join(__dirname, '/i18n/'),
          watch: configService.get('APP_ENV') === EnvDefaults.APP_ENV,
        },
      }),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
      inject: [ConfigService],
    }),
    UnitModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
