import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AveMortaController } from './aveMorta.controller';
import { AveMorta } from './aveMorta.model';
import { AveMortaService } from './aveMorta.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5,
      max: 10,
    }),
    TypeOrmModule.forFeature([AveMorta]),
  ],
  controllers: [AveMortaController],
  providers: [AveMortaService],
})
export class AveMortaModule {}
