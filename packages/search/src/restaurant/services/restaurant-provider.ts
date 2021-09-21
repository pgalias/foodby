import { Observable } from 'rxjs';
import { Location, Restaurant } from '@foodby/commons';
import { CuisineType } from '../../cuisine-type/models/cuisine-type';

export interface RestaurantProvider {
  getRestaurants(
    location: Location,
    radius: number,
    cuisineTypes: CuisineType[],
  ): Observable<Restaurant[]>;
}
