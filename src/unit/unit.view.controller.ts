import { Controller, Get, Render } from '@nestjs/common';

@Controller('units')
export class UnitViewController {
  constructor() {}

  @Get('demo')
  @Render('pages/home.unit.hbs')
  root() {
    return {
      layout: 'layouts/unit.hbs',
      message: 'Hello world from nest!',
    };
  }
}
