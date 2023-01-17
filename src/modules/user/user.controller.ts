import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserRegisterDto } from './dto/userRegister.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')

export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async register(
    @Body(ValidationPipe) userRegisterDto: UserRegisterDto,
  ): Promise<User> {
    return await this.userService.register(userRegisterDto);
}
}
