/* eslint-disable arrow-parens */
import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginGuestDto } from './dto/login.guest.dto';
// import { I18n, I18nContext } from 'nestjs-i18n';

@Controller('auth')
export class AuthViewController {
  constructor() {}

  @Get('guest/login')
  @Render('pages/auth/login.auth.hbs')
  GetLogin() {
    return {
      layout: 'layouts/auth.guest.login.hbs',
      backendErrors: JSON.stringify([]),
    };
  }

  @Post('guest/login')
  @Render('pages/auth/login.auth.hbs')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  PostLogin(
    @Body(new ValidationPipe({ exceptionFactory: (errors) => errors }))
    body: LoginGuestDto,
  ) {
    return {
      layout: 'layouts/auth.guest.login.hbs',
      body,
      backendErrors: JSON.stringify([]),
    };
  }
}
