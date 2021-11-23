import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AveMortaController } from './aveMorta.controller';
import { AveMorta, AveMortaSchema } from './aveMorta.model';
import { AveMortaService } from './aveMorta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AveMorta.name,
        schema: AveMortaSchema,
      },
    ]),
  ],
  controllers: [AveMortaController],
  providers: [AveMortaService],
})
export class AveMortaModule {}
