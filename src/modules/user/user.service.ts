import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dto/userRegister.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async register(userRegisterDto: UserRegisterDto): Promise<User> {
    const user = new User();
    user.name = userRegisterDto.name;
    user.email = userRegisterDto.email;
    user.password = userRegisterDto.password;
    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }
}
