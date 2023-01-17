import { Body, Controller, Post, Request } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserLoginDto } from './userLogin.dto';

@Controller('user-auth')
export class UserAuthController {
  constructor(private userAuthServices: UserAuthService) {}
  //   @Post('/login')
  //   async login(@Request() req) {
  //     return await this.userAuthServices.validateUser(
  //       req.user.email,
  //       req.user.password,
  //     );
  //   }
  @Post('/login')
  async login(@Body() userLoginDto: UserLoginDto) {
    return await this.userAuthServices.validateUser(
      userLoginDto.email,
      userLoginDto.password,
    );
  }
}
