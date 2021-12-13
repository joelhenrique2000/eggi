import {
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsPositive,
  IsString,
  IsOptional,
} from 'class-validator';

export class AtualizarOvoQuebradoDto {
  @IsNotEmpty({
    message: 'É obrigatório definir a incubadora.',
  })
  @IsString({
    message: 'A incubadora deve ser um texto.',
  })
  incubadora: string;
  @IsNumber(
    {},
    {
      message: 'A quantidade deve ser um número.',
    },
  )
  temperatura: number;
  @IsNumber(
    {},
    {
      message: 'A quantidade deve ser um número.',
    },
  )
  @IsPositive({
    message: 'A quantidade deve ser um número positivo.',
  })
  quantidade: number;
  @IsDate({
    message: 'deve inserir um data válida.',
  })
  @IsOptional()
  createdAt: Date;
}
