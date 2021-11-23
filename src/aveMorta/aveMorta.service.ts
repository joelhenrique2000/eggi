import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AveMorta } from './aveMorta.model';
import { Model } from 'mongoose';
import { AdicionarAveMortaDto } from './dto/adicionar-ave-morta.dto';
import { AtualizarAveMortaDto } from './dto/atualizar-ave-morta.dto';

@Injectable()
export class AveMortaService {
  constructor(
    @InjectModel(AveMorta.name)
    private readonly AveMortaModel: Model<AveMorta>,
  ) {}

  async adicionar(
    adicionarAveMortaDto: AdicionarAveMortaDto,
  ): Promise<AveMorta> {
    return await new this.AveMortaModel({
      ...adicionarAveMortaDto,
      createdAt: new Date(),
    }).save();
  }

  async obter(): Promise<AveMorta[]> {
    return await await this.AveMortaModel.find().exec();
  }

  async obterPorId(id: string): Promise<AveMorta> {
    return await this.AveMortaModel.findById(id).exec();
  }

  async atualizar(
    id: string,
    atualizarAveMortaDto: AtualizarAveMortaDto,
  ): Promise<AveMorta> {
    return await this.AveMortaModel.findByIdAndUpdate(
      id,
      atualizarAveMortaDto,
    ).exec();
  }

  async remover(id: string): Promise<AveMorta> {
    return await this.AveMortaModel.findByIdAndDelete(id).exec();
  }
}
