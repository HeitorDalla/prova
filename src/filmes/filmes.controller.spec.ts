import { Test, TestingModule } from '@nestjs/testing';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { beforeEach, describe, it } from 'node:test';

const filmesServiceMock = {
  create: () => undefined,
  findAll: () => undefined,
  findOne: () => undefined,
  update: () => undefined,
  remove: () => undefined,
};

describe('FilmesController', () => {
  let controller: FilmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmesController],
      providers: [
        {
          provide: FilmesService,
          useValue: filmesServiceMock,
        },
      ],
    }).compile();

    controller = module.get<FilmesController>(FilmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
