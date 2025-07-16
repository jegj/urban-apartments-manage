import { Controller, Get, Render, Res } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { FastifyReply } from 'fastify';

@Controller('units')
export class UnitViewController {
  constructor() {}

  @Get('demo/home')
  @Render('pages/unit/home.unit.hbs')
  GetHome(@I18n() i18n: I18nContext, @Res() res: Response) {
    return {
      layoutTitle: 'Patria #106a',
      layout: 'layouts/unit.hbs',
    };
  }

  @Get('demo/accommodation')
  @Render('pages/unit/accommodation.unit.hbs')
  GetAccommodation(@I18n() i18n: I18nContext, @Res() res: FastifyReply) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:accommodation'),
      layout: 'layouts/unit.hbs',
    };

    // return res.view(
    //   'pages/unit/accommodation.unit.hbs',
    //   { layoutTitle: i18n.t('apartment:title:accommodation') },
    //   { layout: 'layouts/unit.hbs' },
    // );
  }

  @Get('demo/tourist-places')
  GetTouristPlaces(@Res() res: FastifyReply) {
    return res.view(
      'pages/unit/tourist_places.unit.hbs',
      { layoutTitle: 'Patria #106' },
      { layout: 'layouts/unit.hbs' },
    );
  }

  @Get('demo/around')
  GetAround(@Res() res: FastifyReply) {
    return res.view(
      'pages/unit/around.unit.hbs',
      { layoutTitle: 'Patria #106' },
      { layout: 'layouts/unit.hbs' },
    );
  }
}
