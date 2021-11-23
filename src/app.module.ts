import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AveMortaModule } from './aveMorta/aveMorta.module';
import { OvoQuebradoModule } from './ovoQuebrado/ovoQuebrado.module';

@Module({
  imports: [
    AveMortaModule,
    OvoQuebradoModule,
    MongooseModule.forRoot(
      'mongodb+srv://frangolino:frangolino@cluster0.mwiee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AveMortaModule, OvoQuebradoModule],
})
export class AppModule {}
