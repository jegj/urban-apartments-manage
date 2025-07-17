import { Controller, Get, Render } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller('units')
export class UnitViewController {
  constructor() {}

  @Get('demo/home')
  @Render('pages/unit/home.unit.hbs')
  GetHome() {
    return {
      layoutTitle: 'Patria #106a',
      layout: 'layouts/unit.hbs',
    };
  }

  @Get('demo/accommodation')
  @Render('pages/unit/accommodation.unit.hbs')
  GetAccommodation(@I18n() i18n: I18nContext) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:accommodation'),
      layout: 'layouts/unit.hbs',
    };
  }

  @Get('demo/tourist-places')
  @Render('pages/unit/tourist_places.unit.hbs')
  GetTouristPlaces(@I18n() i18n: I18nContext) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:accommodation'),
      layout: 'layouts/unit.hbs',
    };
  }

  @Get('demo/around')
  @Render('pages/unit/tourist_places.unit.hbs')
  GetAround(@I18n() i18n: I18nContext) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:accommodation'),
      layout: 'layouts/unit.hbs',
    };
  }
}
