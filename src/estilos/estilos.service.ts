import { Injectable } from '@nestjs/common';
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';

@Injectable()
export class EstilosService {
  create(createEstiloDto: CreateEstiloDto) {
    return 'This action adds a new estilo';
  }

  findAll() {
    return `This action returns all estilos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estilo`;
  }

  update(id: number, updateEstiloDto: UpdateEstiloDto) {
    return `This action updates a #${id} estilo`;
  }

  remove(id: number) {
    return `This action removes a #${id} estilo`;
  }
}
