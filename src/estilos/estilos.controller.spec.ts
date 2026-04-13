import { Test, TestingModule } from '@nestjs/testing';
import { EstilosController } from './estilos.controller';
import { EstilosService } from './estilos.service';

describe('EstilosController', () => {
  let controller: EstilosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstilosController],
      providers: [EstilosService],
    }).compile();

    controller = module.get<EstilosController>(EstilosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
