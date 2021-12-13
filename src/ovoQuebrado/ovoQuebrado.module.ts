import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OvoQuebradoController } from './ovoQuebrado.controller';
import { OvoQuebrado } from './ovoQuebrado.model';
import { OvoQuebradoService } from './ovoQuebrado.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5,
      max: 10,
    }),
    TypeOrmModule.forFeature([OvoQuebrado]),
  ],
  controllers: [OvoQuebradoController],
  providers: [OvoQuebradoService],
})
export class OvoQuebradoModule {}
