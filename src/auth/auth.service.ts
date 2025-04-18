import { Injectable } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './dtos/auth';

@Injectable()
export class AuthService {
  signin(data: SigninDTO) {
    return data;
  }

  signup(data: SignupDTO) {
    return data;
  }
}
