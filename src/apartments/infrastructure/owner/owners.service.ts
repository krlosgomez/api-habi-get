import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/* Entities */
import { Owner } from './owner.entity';
/* Validations */
import { UniqueId } from 'src/shared/validations/uniqueId';

@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) { }

  async findAll() {
    return await this.ownerRepository.find();
  }

  async findOne(id: UniqueId) {
    return await this.ownerRepository.findOne(id.toString());
  }

}
