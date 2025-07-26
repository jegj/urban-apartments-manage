/* eslint-disable arrow-parens */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { LoginGuestDto } from './dto/login.guest.dto';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { validate } from 'class-validator';
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
  async PostLogin(
    @Body()
    body: any,
    @Res() res: Response,
  ) {
    // Transform the plain object to an instance of the DTO
    const validLogin = plainToInstance(LoginGuestDto, body, {
      excludeExtraneousValues: true, // Only include validated properties
    });

    // Validate the transformed DTO instance
    const vErrors = await validate(validLogin, { whitelist: true });

    if (vErrors.length > 0) {
      const backendErrors = vErrors.flatMap((err) =>
        Object.values(err.constraints || {}),
      );

      return res
        .status(HttpStatus.BAD_REQUEST)
        .render('pages/auth/login.auth.hbs', {
          layout: 'layouts/auth.guest.login.hbs',
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: body,
          errors: backendErrors,
        });
    }
    res.redirect('/units/demo/home');
  }
}
