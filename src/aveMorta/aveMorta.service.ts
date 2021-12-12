import { Injectable } from '@nestjs/common';
import { AveMorta } from './aveMorta.model';
import { AdicionarAveMortaDto } from './dto/adicionar-ave-morta.dto';
import { AtualizarAveMortaDto } from './dto/atualizar-ave-morta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AveMortaService {
  constructor(
    @InjectRepository(AveMorta)
    private readonly ovoQuebradoRepository: Repository<AveMorta>,
  ) {}

  async adicionar(
    adicionarAveMortaDto: AdicionarAveMortaDto,
  ): Promise<AveMorta> {
    adicionarAveMortaDto.createdAt = new Date();
    return await this.ovoQuebradoRepository.save(adicionarAveMortaDto);
  }

  async obter(): Promise<AveMorta[]> {
    return await this.ovoQuebradoRepository.find();
  }

  async obterPorId(id: string): Promise<AveMorta> {
    return await this.ovoQuebradoRepository.findOne(id);
  }

  async atualizar(
    id: string,
    atualizarAveMortaDto: AtualizarAveMortaDto,
  ): Promise<AveMorta> {
    await this.ovoQuebradoRepository.update(id, atualizarAveMortaDto);
    return await this.ovoQuebradoRepository.findOne(id);
  }

  async remover(id: string): Promise<boolean> {
    return (await this.ovoQuebradoRepository.delete(id)).affected > 0 && true;
  }
}
