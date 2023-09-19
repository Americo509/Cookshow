import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule],
})
export class AuthModule {}
