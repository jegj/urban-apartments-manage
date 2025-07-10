import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UnitModule } from './unit/unit.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UnitModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
