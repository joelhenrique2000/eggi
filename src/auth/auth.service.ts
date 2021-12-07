import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UsuarioService } from 'src/usuario/usuario.service';

interface Payload {
  email: string;
}

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  async signPayload(payload: Payload) {
    return sign(payload, 'ifpekey', { expiresIn: '7d' });
  }

  async validarUsuario(payload: Payload) {
    return await this.usuarioService.obterPorPayload(payload);
  }
}
