import { PartialType } from '@nestjs/mapped-types';
import { CreateAvioneDto } from './create-avione.dto';

export class UpdateAvioneDto extends PartialType(CreateAvioneDto) {}
