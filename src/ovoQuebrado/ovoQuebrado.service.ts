import { Injectable } from '@nestjs/common';
import { OvoQuebrado } from './ovoQuebrado.model';
import { AdicionarOvoQuebradoDto } from './dto/adicionar-ovo-quebrado.dto';
import { AtualizarOvoQuebradoDto } from './dto/atualizar-ovo-quebrado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OvoQuebradoService {
  constructor(
    @InjectRepository(OvoQuebrado)
    private readonly ovoQuebradoRepository: Repository<OvoQuebrado>,
  ) {}

  async adicionar(
    adicionarOvoQuebradoDto: AdicionarOvoQuebradoDto,
  ): Promise<OvoQuebrado> {
    adicionarOvoQuebradoDto.createdAt = new Date();
    return await this.ovoQuebradoRepository.save(adicionarOvoQuebradoDto);
  }

  async obter(): Promise<OvoQuebrado[]> {
    return await this.ovoQuebradoRepository.find();
  }

  async obterPorId(id: string): Promise<OvoQuebrado> {
    return await this.ovoQuebradoRepository.findOne(id);
  }

  async atualizar(
    id: string,
    atualizarOvoQuebradoDto: AtualizarOvoQuebradoDto,
  ): Promise<OvoQuebrado> {
    await this.ovoQuebradoRepository.update(id, atualizarOvoQuebradoDto);
    return await this.ovoQuebradoRepository.findOne(id);
  }

  async remover(id: string): Promise<boolean> {
    return (await this.ovoQuebradoRepository.delete(id)).affected > 0 && true;
  }
}
