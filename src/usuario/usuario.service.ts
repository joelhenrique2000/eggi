import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from './usuario.model';
import { AdicionarUsuarioDto } from './dto/adicionar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface Payload {
  email: string;
}

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async adicionar(adicionarUsuarioDto: AdicionarUsuarioDto): Promise<Usuario> {
    const { email, senha } = adicionarUsuarioDto;
    adicionarUsuarioDto.email = email.toLowerCase();
    adicionarUsuarioDto.senha = await bcrypt.hash(senha, 10);
    return await this.usuarioRepository.save(adicionarUsuarioDto);
  }

  async validarSenha(senha: string, senhaHash: string): Promise<boolean> {
    return await bcrypt.compare(senha, senhaHash);
  }

  async obter(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async obterPorId(id: string): Promise<Usuario> {
    return await this.usuarioRepository.findOne(id);
  }

  async obterPorLogin(loginDto: LoginDto): Promise<Usuario> {
    const { email, senha } = loginDto;

    const usuario = await this.usuarioRepository.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw new HttpException('Usuário não existe', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(senha, usuario.senha)) {
      return usuario;
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }

  async obterPorPayload(payload: Payload): Promise<Usuario> {
    const { email } = payload;

    return await this.usuarioRepository.findOne({
      where: {
        email,
      },
    });
  }

  async atualizar(
    id: string,
    atualizarUsuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    await this.usuarioRepository.update(id, atualizarUsuarioDto);
    return await this.usuarioRepository.findOne(id);
  }

  async remover(id: string): Promise<boolean> {
    return (await this.usuarioRepository.delete(id)).affected > 0 && true;
  }
}
