import { Controller, Get, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller('units')
export class UnitViewController {
  constructor() {}

  @Get('demo')
  root(@Res() res: FastifyReply) {
    return res.view(
      'pages/home.unit.hbs',
      { message: 'Hello world!' },
      { layout: 'layouts/unit.hbs' },
    );
  }
}
