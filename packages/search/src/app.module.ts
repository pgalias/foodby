import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import {
  YelpRestaurantProvider,
  InMemoryRestaurantProvider,
} from './services/restaurant';
import { InMemoryCuisineTypeProvider } from './services/cuisine-type';
import { RestaurantsController } from './controllers/restaurants';
import { CuisineTypesController } from './controllers/cuisine-types';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [RestaurantsController, CuisineTypesController],
  providers: [
    YelpRestaurantProvider,
    InMemoryRestaurantProvider,
    InMemoryCuisineTypeProvider,
  ],
})
export class AppModule {}
