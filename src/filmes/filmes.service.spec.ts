import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { FilmesService } from './filmes.service';
import { Filme } from './entities/filme.entity';

describe('FilmesService', () => {
  let service: FilmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmesService,
        {
          provide: getModelToken(Filme),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FilmesService>(FilmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
