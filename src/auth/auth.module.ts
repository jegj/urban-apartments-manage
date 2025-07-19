import { AuthViewController } from './auth.view.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthViewController],
})
export class AuthModule {}
