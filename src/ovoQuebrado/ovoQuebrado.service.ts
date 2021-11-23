import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OvoQuebrado } from './ovoQUebrado.model';
import { Model } from 'mongoose';
import { AdicionarOvoQuebradoDto } from './dto/adicionar-ovo-quebrado.dto';
import { AtualizarOvoQuebradoDto } from './dto/atualizar-ovo-quebrado.dto';

@Injectable()
export class OvoQuebradoService {
  constructor(
    @InjectModel(OvoQuebrado.name)
    private readonly OvoQuebradoModel: Model<OvoQuebrado>,
  ) {}

  async adicionar(
    adicionarOvoQuebradoDto: AdicionarOvoQuebradoDto,
  ): Promise<OvoQuebrado> {
    return await new this.OvoQuebradoModel({
      ...adicionarOvoQuebradoDto,
      createdAt: new Date(),
    }).save();
  }

  async obter(): Promise<OvoQuebrado[]> {
    return await await this.OvoQuebradoModel.find().exec();
  }

  async obterPorId(id: string): Promise<OvoQuebrado> {
    return await this.OvoQuebradoModel.findById(id).exec();
  }

  async atualizar(
    id: string,
    atualizarOvoQuebradoDto: AtualizarOvoQuebradoDto,
  ): Promise<OvoQuebrado> {
    return await this.OvoQuebradoModel.findByIdAndUpdate(
      id,
      atualizarOvoQuebradoDto,
    ).exec();
  }

  async remover(id: string): Promise<OvoQuebrado> {
    return await this.OvoQuebradoModel.findByIdAndDelete(id).exec();
  }
}
