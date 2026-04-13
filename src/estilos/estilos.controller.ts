import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';

@Controller('estilos')
export class EstilosController {
  constructor(private readonly estilosService: EstilosService) {}

  @Post()
  create(@Body() createEstiloDto: CreateEstiloDto) {
    return this.estilosService.create(createEstiloDto);
  }

  @Get()
  findAll() {
    return this.estilosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estilosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstiloDto: UpdateEstiloDto) {
    return this.estilosService.update(+id, updateEstiloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estilosService.remove(+id);
  }
}
