import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';
import { Estilo } from 'src/estilos/entities/estilo.entity';

@Injectable()
export class FilmesService {
  constructor(
    @InjectModel(Filme)
    private readonly filmeModel: typeof Filme,
  ) {}

  create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return this.filmeModel.create({ ...createFilmeDto } as Filme);
  }

  findAll(): Promise<Filme[]> {
    return this.filmeModel.findAll({ include: [Estilo] });
  }

  async findOne(id: number): Promise<Filme> {
    const filme = await this.filmeModel.findByPk(id, { include: [Estilo] });

    if (!filme) {
      throw new NotFoundException(`Filme com id ${id} nao encontrado`);
    }

    return filme;
  }

  async update(id: number, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.findOne(id);
    await filme.update({ ...updateFilmeDto });

    return filme;
  }

  async remove(id: number): Promise<{ message: string }> {
    const filme = await this.findOne(id);
    await filme.destroy();

    return { message: 'Filme removido com sucesso' };
  }
}
