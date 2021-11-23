import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OvoQuebradoService } from './ovoQuebrado.service';
import { AdicionarOvoQuebradoDto } from './dto/adicionar-ovo-quebrado.dto';
import { AtualizarOvoQuebradoDto } from './dto/atualizar-ovo-quebrado.dto';

@Controller('api/ovo_quebrado')
export class OvoQuebradoController {
  constructor(private service: OvoQuebradoService) {}

  @Get()
  async obter() {
    return await this.service.obter();
  }

  @Get('/:id')
  async obterPorId(@Param() params) {
    return this.service.obterPorId(params.id);
  }

  @Post()
  async adicionar(@Body() adicionarOvoQuebradoDto: AdicionarOvoQuebradoDto) {
    return this.service.adicionar(adicionarOvoQuebradoDto);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() ovoQuebrado: AtualizarOvoQuebradoDto,
  ) {
    return this.service.atualizar(id, ovoQuebrado);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return this.service.remover(id);
  }
}
