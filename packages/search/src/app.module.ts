import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CuisineTypeModule } from './cuisine-type/cuisine-type.module';

@Module({
  imports: [ConfigModule.forRoot(), RestaurantModule, CuisineTypeModule],
})
export class AppModule {}
