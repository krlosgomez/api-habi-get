import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Api } from 'src/shared/const';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';

@ApiTags('Apartments')
@Controller(`${Api.apiPrefix}apartments`)
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) { }

  @Post()
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentsService.create(createApartmentDto);
  }

  @Get()
  findAll() {
    return this.apartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentsService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentsService.remove(+id);
  }
}
