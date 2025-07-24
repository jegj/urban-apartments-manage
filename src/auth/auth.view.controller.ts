import { Controller, Get, Render } from '@nestjs/common';
// import { I18n, I18nContext } from 'nestjs-i18n';

@Controller('auth')
export class AuthViewController {
  constructor() {}

  @Get('guest/login')
  @Render('pages/auth/login.auth.hbs')
  GetHome() {
    return {
      layout: 'layouts/auth.guest.login.hbs',
      unitImageBanner: '/img/pages/gray_apartment1.jpg',
    };
  }
}
