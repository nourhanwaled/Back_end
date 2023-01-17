import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { config } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authServices: UserAuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config['jhipster.security.authentication.jwt.base64-secret'],
    });
  }
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authServices.validateUser(email, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}