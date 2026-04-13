import { Test, TestingModule } from '@nestjs/testing';
import { EstilosService } from './estilos.service';

describe('EstilosService', () => {
  let service: EstilosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstilosService],
    }).compile();

    service = module.get<EstilosService>(EstilosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
