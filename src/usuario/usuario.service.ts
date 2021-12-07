import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.model';
import { Model } from 'mongoose';
import { AdicionarUsuarioDto } from './dto/adicionar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';

interface Payload {
  email: string;
}

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly UsuarioModel: Model<Usuario>,
  ) {}

  async adicionar(adicionarUsuarioDto: AdicionarUsuarioDto): Promise<Usuario> {
    const { email } = adicionarUsuarioDto;
    adicionarUsuarioDto.email = email.toLowerCase();

    return await new this.UsuarioModel(adicionarUsuarioDto).save();
  }

  async validarSenha(senha: string, senhaHash: string): Promise<boolean> {
    return await bcrypt.compare(senha, senhaHash);
  }

  async obter(): Promise<Usuario[]> {
    return await await this.UsuarioModel.find().exec();
  }

  async obterPorId(id: string): Promise<Usuario> {
    return await this.UsuarioModel.findById(id).exec();
  }

  async obterPorLogin(loginDto: LoginDto): Promise<Usuario> {
    const { email, senha } = loginDto;

    const usuario = await this.UsuarioModel.findOne({ email }).exec();

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

    return await this.UsuarioModel.findOne({ email }).exec();
  }

  async atualizar(
    id: string,
    atualizarUsuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    return await this.UsuarioModel.findByIdAndUpdate(id, atualizarUsuarioDto);
  }

  async remover(id: string): Promise<Usuario> {
    return await this.UsuarioModel.findByIdAndDelete(id).exec();
  }
}
