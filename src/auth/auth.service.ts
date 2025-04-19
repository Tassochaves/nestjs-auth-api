import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async signup(data: SignupDTO) {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (userAlreadyExists) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.prismaService.user.create({ data });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  signin(data: SigninDTO) {
    return data;
  }
}
