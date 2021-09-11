import { Observable } from 'rxjs';
import { Location } from '@foodby/commons';
import { Restaurant } from '../../model/restaurant';
import { CuisineType } from '../../model/cuisine-type';

export interface RestaurantProvider {
  getRestaurants(
    location: Location,
    radius: number,
    cuisineTypes: CuisineType[],
  ): Observable<Restaurant[]>;
}
