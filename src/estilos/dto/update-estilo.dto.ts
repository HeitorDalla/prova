import { PartialType } from '@nestjs/mapped-types';
import { CreateEstiloDto } from './create-estilo.dto';

export class UpdateEstiloDto extends PartialType(CreateEstiloDto) {}
