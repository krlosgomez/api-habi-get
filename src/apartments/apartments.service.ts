import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, ILike, Repository } from 'typeorm';

/* Dtos */
import { FindApartmentDto } from './dto/find-apartment.dto';
import { ListApartmentDto } from './dto/list-apartments.dto';
/* Entities */
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
      skip: params.limit * (params.page - 1),
      loadRelationIds: true
    };

    const [apartmentsFound, total] = await this.apartmentRepository.findAndCount(options);
    const pages = total % params.limit > 0 ? Math.trunc(total / params.limit) + 1 : Math.trunc(total / params.limit);
    return {
      apartments: apartmentsFound,
      page: parseInt(params.page.toString(), 10),
      pages,
      total: total,
      limit: parseInt(params.limit.toString(), 10)
    };
  }

  async findOne(id: string) {
    return await this.apartmentRepository.findOne(id);
  }

}
