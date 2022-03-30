import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ValidationException from 'src/shared/validations/validationError';
import { FindConditions, FindManyOptions, ILike, Like, ObjectLiteral, Repository } from 'typeorm';
import { FindApartmentDto } from './dto/find-apartment.dto';
import { ListApartmentDto } from './dto/list-apartments.dto';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentsService {

  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) { }

  async findAll(params: FindApartmentDto): Promise<ListApartmentDto> {

    const where: FindConditions<Apartment> = {};
    if (params.location) {
      where.location = ILike(`%${params.location}%`);
    }
    if (params.created_at) {
      where.created_at = params.created_at;
    }
    const options: FindManyOptions<Apartment> = {
      where,
      order: { created_at: params.order },
      take: params.limit,
      skip: params.limit * (params.page - 1)
    };

    const [apartmentsFound, total] = await this.apartmentRepository.findAndCount(options);
    return {
      apartments: apartmentsFound,
      page: parseInt(params.page.toString(), 10),
      pages: total > params.limit ? Math.trunc(total / params.limit) : 1,
      total: total,
      limit: parseInt(params.limit.toString(), 10)
    };
  }

  findOne(id: string) {
    return this.apartmentRepository.findOne(id);
  }

}
