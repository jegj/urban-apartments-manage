import { Controller, Get, Render } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller('units')
export class UnitViewController {
  constructor() {}

  @Get('demo/home')
  @Render('pages/unit/home.unit.hbs')
  GetHome() {
    return {
      layoutTitle: 'Patria #106',
      layout: 'layouts/unit.hbs',
      unitImageBanner: '/img/pages/gray_apartment1.jpg',
    };
  }

  @Get('demo/accommodation')
  @Render('pages/unit/accommodation.unit.hbs')
  GetAccommodation(@I18n() i18n: I18nContext) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:accommodation'),
      layout: 'layouts/unit.hbs',
      unitImageBanner: '/img/pages/gray_apartment1.jpg',
    };
  }

  @Get('demo/tourist-places')
  @Render('pages/unit/tourist_places.unit.hbs')
  GetTouristPlaces(@I18n() i18n: I18nContext) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:tourist_places'),
      layout: 'layouts/unit.hbs',
      unitImageBanner: '/img/pages/gray_apartment1.jpg',
    };
  }

  @Get('demo/around')
  @Render('pages/unit/around.unit.hbs')
  GetAround(@I18n() i18n: I18nContext) {
    return {
      layoutTitle: i18n.t('unit.apartment:title:around'),
      layout: 'layouts/unit.hbs',
      unitImageBanner: '/img/pages/gray_apartment1.jpg',
    };
  }
}
