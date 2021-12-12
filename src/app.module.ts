import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AveMortaModule } from './aveMorta/aveMorta.module';
import { OvoQuebradoModule } from './ovoQuebrado/ovoQuebrado.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.model';
import { AveMorta } from './aveMorta/aveMorta.model';
import { OvoQuebrado } from './ovoQuebrado/ovoQuebrado.model';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5,
      max: 10,
    }),
    AveMortaModule,
    OvoQuebradoModule,
    UsuarioModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'eggi',
      entities: [Usuario, AveMorta, OvoQuebrado],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AveMortaModule, OvoQuebradoModule, UsuarioModule],
})
export class AppModule {}
