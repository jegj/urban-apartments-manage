import { Controller, Get, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller('units')
export class UnitViewController {
  constructor() {}

  @Get('demo/home')
  GetHome(@Res() res: FastifyReply) {
    return res.view(
      'pages/unit/home.unit.hbs',
      { message: 'Hello world!' },
      { layout: 'layouts/unit.hbs' },
    );
  }

  @Get('demo/accommodation')
  GetAccommodation(@Res() res: FastifyReply) {
    return res.view(
      'pages/unit/accommodation.unit.hbs',
      { message: 'Hello world!' },
      { layout: 'layouts/unit.hbs' },
    );
  }

  @Get('demo/tourist-places')
  GetTouristPlaces(@Res() res: FastifyReply) {
    return res.view(
      'pages/unit/tourist_places.unit.hbs',
      { message: 'Hello world!' },
      { layout: 'layouts/unit.hbs' },
    );
  }

  @Get('demo/around')
  GetAround(@Res() res: FastifyReply) {
    return res.view(
      'pages/unit/around.unit.hbs',
      { message: 'Hello world!' },
      { layout: 'layouts/unit.hbs' },
    );
  }
}
