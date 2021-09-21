import { Injectable } from '@nestjs/common';
import { Location, Restaurant } from '@foodby/commons';
import { RestaurantProvider } from '../restaurant-provider';
import {
  Cuisines,
  CuisineType,
} from '../../../cuisine-type/models/cuisine-type';
import { Observable, of } from 'rxjs';

@Injectable()
export class InMemoryRestaurantProvider implements RestaurantProvider {
  private readonly restaurants: Restaurant[] = [
    {
      name: 'Restaurant',
      url: 'https://restaurant.com',
      location: { latitude: 55.152485, longitude: 14.846347 },
      cuisine: [Cuisines.GREEK],
      address: ['34 Peachfield Road', 'Ceint', 'LL61 7LP United Kingdom'],
      distance: 43245.54,
      phone: '+44 115 496 0384',
    },
    {
      name: 'Eetcafé',
      url: 'https://eetcafe.nl',
      location: { latitude: 55.113081, longitude: 14.827354 },
      cuisine: [Cuisines.JAPANESE, Cuisines.BELGIAN],
      address: [
        'Cort van der Lindenlaan 51',
        'Naarden',
        'Noord-Holland',
        '1412 BX Netherlanden',
      ],
      distance: 4423.65,
      phone: '+31 06-15503627',
    },
    {
      name: 'Diner',
      url: 'https://diner.fr',
      location: { latitude: 55.093933, longitude: 14.777439 },
      cuisine: [Cuisines.POLISH],
      address: ['117 Rue Frédéric Chopin', 'Vichy', 'Auvergne', '03200 France'],
      distance: 5235.41,
      phone: '+33-700-555-349',
    },
    {
      name: 'Einen Happen essen gehen',
      url: 'https://einen-happen-essen-gehen.de',
      location: { latitude: 55.13933, longitude: 14.931947 },
      cuisine: [Cuisines.ITALIAN, Cuisines.GREEK],
      address: [
        'Marseiller Strasse 70',
        'Unterammergau',
        'Freistaat Bayern',
        '82497 Germany',
      ],
      distance: 432.43,
      phone: '+49 08822 51 01791',
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
