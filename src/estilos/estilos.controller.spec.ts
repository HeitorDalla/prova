import { Test, TestingModule } from '@nestjs/testing';
import { EstilosController } from './estilos.controller';
import { EstilosService } from './estilos.service';

const estilosServiceMock = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('EstilosController', () => {
  let controller: EstilosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstilosController],
      providers: [
        {
          provide: EstilosService,
          useValue: estilosServiceMock,
        },
      ],
    }).compile();

    controller = module.get<EstilosController>(EstilosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
