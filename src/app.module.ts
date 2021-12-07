import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AveMortaModule } from './aveMorta/aveMorta.module';
import { OvoQuebradoModule } from './ovoQuebrado/ovoQuebrado.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [
    AveMortaModule,
    OvoQuebradoModule,
    UsuarioModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://frangolino:frangolino@cluster0.mwiee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AveMortaModule, OvoQuebradoModule, UsuarioModule],
})
export class AppModule {}
