import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeConfigService } from './sequelize.config.service';

describe('SequelizeConfigService', () => {
  let service: SequelizeConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequelizeConfigService],
    }).compile();

    service = module.get<SequelizeConfigService>(SequelizeConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
