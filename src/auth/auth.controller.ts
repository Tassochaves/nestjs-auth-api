import { Body, Controller, Post } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: SignupDTO) {
    return this.authService.signup(body);
  }

  @Post('signin')
  signin(@Body() body: SigninDTO) {
    return this.authService.signin(body);
  }
}
