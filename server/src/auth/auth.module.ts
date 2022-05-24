import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { GetUserByEmailRepositoryLocal } from '@/user/repositories/impl/get-user-by-email.repository.local';
import { GetUserByEmailRepository } from '@/user/repositories/get-user-by-email.repository';
import { UserModule } from '@/user/user.module';

import { LoginController } from '@/auth/controllers/login.controller';
import { AuthService } from '@/auth/services/login.service';
import { JwtStrategy } from '@/auth/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: GetUserByEmailRepository,
      useClass: GetUserByEmailRepositoryLocal,
    },
    JwtStrategy,
  ],
  controllers: [LoginController],
})
export class AuthModule {}
