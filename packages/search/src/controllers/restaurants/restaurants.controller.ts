import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Location } from '@foodby/commons';
import { YelpRestaurantProvider } from '../../services/restaurant';
import { CuisineType } from '../../model/cuisine-type';

@Controller()
export class RestaurantsController {
  constructor(
    private readonly yelpRestaurantProvider: YelpRestaurantProvider,
  ) {}

  @MessagePattern('restaurants')
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
