import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AveMortaService } from './aveMorta.service';
import { AdicionarAveMortaDto } from './dto/adicionar-ave-morta.dto';
import { AtualizarAveMortaDto } from './dto/atualizar-ave-morta.dto';

@Controller('api/ave_morta')
export class AveMortaController {
  constructor(private service: AveMortaService) {}

  @Get()
  async obter() {
    return await this.service.obter();
  }

  @Get('/:id')
  async obterPorId(@Param() params) {
    return this.service.obterPorId(params.id);
  }

  @Post()
  async adicionar(@Body() adicionarAveMortaDto: AdicionarAveMortaDto) {
    return this.service.adicionar(adicionarAveMortaDto);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() aveMorta: AtualizarAveMortaDto,
  ) {
    return this.service.atualizar(id, aveMorta);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return this.service.remover(id);
  }
}
