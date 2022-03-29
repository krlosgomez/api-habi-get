import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* Config */
import config from 'src/shared/config';

import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { Owner } from './entities/owner.entity';

@Module({
  controllers: [OwnersController],
  providers: [OwnersService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: config().database.habiDataBase.port,
      username: config().database.habiDataBase.username,
      password: config().database.habiDataBase.password,
      database: config().database.habiDataBase.database,
      synchronize: config().isDev ? true : false,
      entities: [Owner]
    }),
    TypeOrmModule.forFeature([Owner])
  ],
})
export class OwnersModule { }
