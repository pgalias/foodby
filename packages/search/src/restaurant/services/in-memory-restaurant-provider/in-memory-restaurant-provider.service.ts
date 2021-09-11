import { Injectable } from '@nestjs/common';
import { Location } from '@foodby/commons';
import { RestaurantProvider } from '../restaurant-provider';
import {
  Cuisines,
  CuisineType,
} from '../../../cuisine-type/models/cuisine-type';
import { Restaurant } from '../../models/restaurant';
import { Observable, of } from 'rxjs';

@Injectable()
export class InMemoryRestaurantProvider implements RestaurantProvider {
  private readonly restaurants = [
    {
      name: 'Restaurant',
      url: 'https://restaurant.com',
      location: { latitude: 55.152485, longitude: 14.846347 },
      cuisine: [Cuisines.GREEK],
    },
    {
      name: 'Eetcafé',
      url: 'https://eetcafe.nl',
      location: { latitude: 55.113081, longitude: 14.827354 },
      cuisine: [Cuisines.JAPANESE, Cuisines.BELGIAN],
    },
    {
      name: 'Diner',
      url: 'https://diner.fr',
      location: { latitude: 55.093933, longitude: 14.777439 },
      cuisine: [Cuisines.POLISH],
    },
    {
      name: 'Einen Happen essen gehen',
      url: 'https://einen-happen-essen-gehen.de',
      location: { latitude: 55.13933, longitude: 14.931947 },
      cuisine: [Cuisines.ITALIAN, Cuisines.GREEK],
    },
  ];

  getRestaurants(
    location: Location,
    radius: number,
    cuisineTypes: CuisineType[],
  ): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
}
