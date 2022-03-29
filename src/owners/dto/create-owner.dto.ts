import { ApiProperty } from "@nestjs/swagger";

export class CreateOwnerDto {
  @ApiProperty({ uniqueItems: true, description: 'Uuid v4' })
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  email: string;
}
