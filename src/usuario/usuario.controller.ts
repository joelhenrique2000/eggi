import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { AdicionarUsuarioDto } from './dto/adicionar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';

@Controller('api/usuario')
export class UsuarioController {
  constructor(private service: UsuarioService) {}

  @Get()
  async obter() {
    return await this.service.obter();
  }

  @Get('/:id')
  async obterPorId(@Param() params) {
    return this.service.obterPorId(params.id);
  }

  @Post()
  async adicionar(@Body() adicionarUsuarioDto: AdicionarUsuarioDto) {
    return this.service.adicionar(adicionarUsuarioDto);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() usuario: AtualizarUsuarioDto,
  ) {
    return this.service.atualizar(id, usuario);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return this.service.remover(id);
  }
}
