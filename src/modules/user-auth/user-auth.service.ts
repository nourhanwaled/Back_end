import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserAuthService {
  constructor(
    private userServices: UserService,
    private jwtServices: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userServices.getUserByEmail(email);
    if (!user) throw new BadRequestException();
    if (!bcrypt.compare(password, (await user).password)) {
      throw new UnauthorizedException();
    }
    const userData = {
      name: user.name,
      id: user.id,
    };
    console.log(user);
    return this.generateToken(userData);
  }
  async generateToken(user: any) {
    return {
      acces_token: this.jwtServices.sign({
        name: user.name,
        sub: user.id,
      }),
    };
  }
}
