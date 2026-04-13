import { Module } from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { EstilosController } from './estilos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estilo } from './entities/estilo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Estilo])],
  controllers: [EstilosController],
  providers: [EstilosService],
})
export class EstilosModule {}
