import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'Nour',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UserAuthService],
  controllers: [UserAuthController],
  exports: [UserAuthService],
})
export class UserAuthModule {}
