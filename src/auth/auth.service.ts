import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(private readonly _usersService: UserService) {}

  async validateUser(payload: LoginDto): Promise<any> {
    const user = await this._usersService.getUserByEmail(payload.email);
    console.info(user);
    if (
      !user ||
      user.email !== payload.email ||
      user.password !== payload.password
    ) {
      throw new UnauthorizedException();
    }
    return true;
  }

  async login(payload: LoginDto) {
    return payload;
  }
}
