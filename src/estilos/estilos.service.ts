import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { Estilo } from './entities/estilo.entity';

@Injectable()
export class EstilosService {
  constructor(
    @InjectModel(Estilo)
    private readonly estiloModel: typeof Estilo,
  ) {}

  create(createEstiloDto: CreateEstiloDto): Promise<Estilo> {
    return this.estiloModel.create({ ...createEstiloDto } as Estilo);
  }

  findAll(): Promise<Estilo[]> {
    return this.estiloModel.findAll();
  }

  async findOne(id: number): Promise<Estilo> {
    const estilo = await this.estiloModel.findByPk(id);

    if (!estilo) {
      throw new NotFoundException(`Estilo com id ${id} nao encontrado`);
    }

    return estilo;
  }

  async update(id: number, updateEstiloDto: UpdateEstiloDto): Promise<Estilo> {
    const estilo = await this.findOne(id);
    await estilo.update({ ...updateEstiloDto });

    return estilo;
  }

  async remove(id: number): Promise<{ message: string }> {
    const estilo = await this.findOne(id);
    await estilo.destroy();

    return { message: 'Estilo removido com sucesso' };
  }
}
