import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { GetUserByEmailRepository } from '@/user/repositories/get-user-by-email.repository';
import { LoginDTO } from '@/auth/dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly getUserByEmailRepository: GetUserByEmailRepository,
    private readonly jwtTokenService: JwtService,
  ) {}

  async login({ email, password: pass }: LoginDTO) {
    const user = await this.getUserByEmailRepository.getUserByEmail(email);

    if (!user) throw new Error('User not found');
    if (user.password !== pass) throw Error('Invalid password');

    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
