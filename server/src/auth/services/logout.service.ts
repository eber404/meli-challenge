import { Injectable } from '@nestjs/common';

import { BANNED_TOKENS } from '@/auth/config/tokens.blacklist';

@Injectable()
export class LogoutService {
  async logout(token: string) {
    BANNED_TOKENS.push(token);
  }
}
