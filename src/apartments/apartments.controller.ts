import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Api } from 'src/shared/const';
import { ApartmentsService } from './apartments.service';
import { FindApartmentDto } from './dto/find-apartment.dto';

@ApiTags('Apartments')
@Controller(`${Api.apiPrefix}apartments`)
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) { }

  @Get()
  findAll(@Query() params: FindApartmentDto) {
    return this.apartmentsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentsService.findOne(id);
  }
}
