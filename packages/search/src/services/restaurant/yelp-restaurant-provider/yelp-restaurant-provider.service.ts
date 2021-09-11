import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { QueryString } from '@foodby/commons';
import { RestaurantProvider } from '../restaurant-provider';
import { CuisineType } from '../../../model/cuisine-type';
import { Location } from '../../../model/location';
import { Restaurant } from '../../../model/restaurant';

interface ValueObjectBusiness {
  name: string;
  url: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  categories: {
    title: string;
  }[];
}
interface ValueObject {
  businesses: ValueObjectBusiness[];
}

@Injectable()
export class YelpRestaurantProvider implements RestaurantProvider {
  public static readonly BASE_URL = 'https://api.yelp.com/v3/businesses/search';

  constructor(private readonly httpService: HttpService) {}

  getRestaurants(
    location: Location,
    radius: number,
    cuisineTypes: CuisineType[],
  ): Observable<Restaurant[]> {
    const queryString = QueryString.fromObject({
      term: 'restaurant',
      latitude: location.latitude.toString(),
      longitude: location.longitude.toString(),
      radius: radius.toString(),
      categories: cuisineTypes.toString(),
    });

    return this.httpService
      .get(`${YelpRestaurantProvider.BASE_URL}?${queryString}`, {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      })
      .pipe(
        pluck('data'),
        map(({ businesses }: ValueObject) =>
          businesses.map(this.mapBusinessToRestaurant),
        ),
      );
  }

  private mapBusinessToRestaurant(business: ValueObjectBusiness): Restaurant {
    return {
      name: business.name,
      url: business.url,
      location: business.coordinates,
      cuisine: business.categories.map(({ title }) => title as CuisineType),
    };
  }
}
