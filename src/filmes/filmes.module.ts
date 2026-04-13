import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Filme } from './entities/filme.entity';

@Module({
  imports: [SequelizeModule.forFeature([Filme])],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
