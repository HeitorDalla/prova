import { Module } from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { EstilosController } from './estilos.controller';

@Module({
  controllers: [EstilosController],
  providers: [EstilosService],
})
export class EstilosModule {}
