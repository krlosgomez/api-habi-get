import { Controller } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { Api } from 'src/shared/const';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Owners')
@Controller(`${Api.apiPrefix}owners`)
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) { }

}
