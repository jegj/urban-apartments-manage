import { Module } from '@nestjs/common';
import { UnitViewController } from './unit.view.controller';

@Module({
  controllers: [UnitViewController],
})
export class UnitModule {}
