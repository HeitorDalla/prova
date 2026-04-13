import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { EstilosModule } from './estilos/estilos.module';

@Module({
  imports: [FilmesModule, EstilosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
