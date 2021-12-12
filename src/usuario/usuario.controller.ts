import {
  Body,
  CacheInterceptor,
  CACHE_MANAGER,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { AdicionarUsuarioDto } from './dto/adicionar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import { Cache } from 'cache-manager';
@Controller('api/usuario')
@UseInterceptors(CacheInterceptor)
export class UsuarioController {
  constructor(
    private service: UsuarioService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

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
