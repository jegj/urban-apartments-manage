import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('ping')
  ping() {
    return { message: 'pong' };
  }
}
