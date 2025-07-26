import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginGuestDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  pincode: string;
}
