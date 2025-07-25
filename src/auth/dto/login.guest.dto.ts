import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginGuestDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  pincode: string;
}
