import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { InMemoryRestaurantProvider, YelpRestaurantProvider } from './services';
import { ListController } from './controllers';

@Module({
  imports: [HttpModule],
  providers: [InMemoryRestaurantProvider, YelpRestaurantProvider],
  controllers: [ListController],
})
export class RestaurantModule {}
