import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OvoQuebradoController } from './ovoQuebrado.controller';
import { OvoQuebrado, OvoQuebradoSchema } from './ovoQuebrado.model';
import { OvoQuebradoService } from './ovoQuebrado.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OvoQuebrado.name,
        schema: OvoQuebradoSchema,
      },
    ]),
  ],
  controllers: [OvoQuebradoController],
  providers: [OvoQuebradoService],
})
export class OvoQuebradoModule {}
