import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5,
      max: 10,
    }),
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
