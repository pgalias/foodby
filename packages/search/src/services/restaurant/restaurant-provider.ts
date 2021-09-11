import { Observable } from 'rxjs';
import { Restaurant } from '../../model/restaurant';
import { Location } from '../../model/location';
import { CuisineType } from '../../model/cuisine-type';

export interface RestaurantProvider {
  getRestaurants(
    location: Location,
    radius: number,
    cuisineTypes: CuisineType[],
  ): Observable<Restaurant[]>;
}
