import { ApiProperty } from "@nestjs/swagger";

export class FindApartmentDto {
  @ApiProperty({ required: false })
  created_at?: Date;
  @ApiProperty({ required: false })
  location?: string;
  @ApiProperty({ default: 1, minimum: 1, type: 'number', description: '!Mínimo 1!' })
  page: number;
  @ApiProperty({ default: 10, required: false })
  limit?: number = 10;
  @ApiProperty({ enum: ['ASC', 'DESC'], default: 'ASC', required: false })
  order: "ASC" | "DESC" = 'DESC';
}
