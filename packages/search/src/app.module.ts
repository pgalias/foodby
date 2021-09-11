import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import {
  YelpRestaurantProvider,
  InMemoryRestaurantProviderService,
} from './services/restaurant';
import { RestaurantsController } from './controllers/restaurants';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [RestaurantsController],
  providers: [YelpRestaurantProvider, InMemoryRestaurantProviderService],
})
export class AppModule {}
