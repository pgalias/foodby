import { Controller } from '@nestjs/common';
import { YelpRestaurantProvider } from '../../services';
import { MessagePattern } from '@nestjs/microservices';
import { Location } from '@foodby/commons';
import { CuisineType } from '../../../cuisine-type/models/cuisine-type';

@Controller()
export class ListController {
  constructor(
    private readonly yelpRestaurantProvider: YelpRestaurantProvider,
  ) {}

  @MessagePattern('restaurants')
  listAction([location, radius, cuisineTypes]: [
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
