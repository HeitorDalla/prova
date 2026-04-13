import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { EstilosService } from './estilos.service';
import { Estilo } from './entities/estilo.entity';
import { beforeEach, describe, it } from 'node:test';

describe('EstilosService', () => {
  let service: EstilosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstilosService,
        {
          provide: getModelToken(Estilo),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EstilosService>(EstilosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
