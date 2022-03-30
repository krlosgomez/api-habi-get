import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ValidationException from 'src/shared/validations/validationError';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentsService {

  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) { }

  async create(createApartmentDto: CreateApartmentDto): Promise<CreateApartmentDto> {
    const RApartment = this.apartmentRepository;

    const apartmentFount = await this.findOne(createApartmentDto.id);
    if (apartmentFount) {
      throw new ValidationException('El id ya existe.');
    }

    const apartmentCreated = await RApartment.save({
      id: createApartmentDto.id,
      area: createApartmentDto.area,
      address: createApartmentDto.address,
      city: createApartmentDto.city,
      location: createApartmentDto.location,
      number_rooms: createApartmentDto.number_rooms,
      price: createApartmentDto.price,
      id_owner: createApartmentDto.id_owner
    });

    return apartmentCreated;
  }

  findAll() {
    return `This action returns all apartments`;
  }

  findOne(id: string) {
    return this.apartmentRepository.findOne(id);
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
