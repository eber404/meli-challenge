import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from '@/auth/services/login.service';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    const { password, email } = body;

    const token = await this.authService.login({ email, password });

    return token;
  }
}
