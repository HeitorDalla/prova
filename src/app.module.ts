import { Module } from '@nestjs/common';
import { FilmesModule } from './filmes/filmes.module';
import { EstilosModule } from './estilos/estilos.module';
import { SequelizeConfigService } from './sequelize.config/sequelize.config.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService
    }),
    FilmesModule, EstilosModule
  ],
  providers: [SequelizeConfigService]
})
export class AppModule {}