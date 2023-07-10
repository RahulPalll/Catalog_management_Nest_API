import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<User> {
    const { email, password } = loginDto;
    const user = await this.usersService.findByEmail(email);

    if (user && user.password === password) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: User): Promise<{ accessToken: string }> {
    const payload: JwtPayload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
