import { IsEmail, IsNotEmpty, Min } from 'class-validator';
export class SharedUsuarioaDto {
  @IsEmail(
    {},
    {
      message: 'Deve inserir um e-mail válido.',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'A senha não deve ser vazia.',
  })
  @Min(7, {
    message: 'A senha tem que ter no mínimo 7 caracteres.',
  })
  senha: string;
}
