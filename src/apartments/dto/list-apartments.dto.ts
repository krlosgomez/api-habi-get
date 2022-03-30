import { Apartment } from '../entities/apartment.entity';

export class ListApartmentDto {
  apartments: Apartment[];
  page: number;
  pages: number;
  total: number;
  limit?: number = 10;
}
