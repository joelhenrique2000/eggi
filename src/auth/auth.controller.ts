import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
  constructor(
    private userService: UsuarioService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() UserDTO: LoginDto) {
    const user = await this.userService.obterPorLogin(UserDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
