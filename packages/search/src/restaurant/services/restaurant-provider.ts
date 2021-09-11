import { Observable } from 'rxjs';
import { Location } from '@foodby/commons';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../../cuisine-type/models/cuisine-type';

export interface RestaurantProvider {
  getRestaurants(
    location: Location,
    radius: number,
    cuisineTypes: CuisineType[],
  ): Observable<Restaurant[]>;
}
