import { Controller } from '@nestjs/common';
import { YelpRestaurantProvider } from '../../services/restaurant';
import { MessagePattern } from '@nestjs/microservices';
import { Endpoints } from '../../constants';
import { Location } from '../../model/location';
import { CuisineType } from '../../model/cuisine-type';

@Controller()
export class RestaurantsController {
  constructor(
    private readonly yelpRestaurantProvider: YelpRestaurantProvider,
  ) {}

  @MessagePattern(Endpoints.RESTAURANTS)
  getRestaurants([location, radius, cuisineTypes]: [
    Location,
    number,
    CuisineType[],
  ]) {
    return this.yelpRestaurantProvider.getRestaurants(
      location,
      radius,
      cuisineTypes,
    );
  }
}
