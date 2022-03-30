import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { ApartmentsModule } from './apartments/apartments.module';

@Module({
  imports: [ApartmentsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
