import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/* Config */
import config from 'src/shared/config';

import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { Apartment } from './entities/apartment.entity';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
  imports: [
    TypeOrmModule.forFeature([Apartment]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: config().database.habiDataBase.port,
      username: config().database.habiDataBase.username,
      password: config().database.habiDataBase.password,
      database: config().database.habiDataBase.database,
      synchronize: config().isDev ? true : false,
      autoLoadEntities: true,
      entities: [__dirname + "/entities/*.ts"]
    })
  ],
})
export class ApartmentsModule { }
