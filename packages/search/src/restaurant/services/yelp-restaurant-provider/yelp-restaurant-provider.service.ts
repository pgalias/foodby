import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Location, Restaurant, QueryString } from '@foodby/commons';
import { RestaurantProvider } from '../restaurant-provider';
import { CuisineType } from '../../../cuisine-type/models/cuisine-type';

interface BusinessDto {
  name: string;
  url: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  categories: {
    title: string;
  }[];
  location: {
    display_address: string[];
  };
  distance: number;
  display_phone: string;
  image_url: string;
}

interface BusinessesCollectionDto {
  businesses: BusinessDto[];
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
        map(({ businesses }: BusinessesCollectionDto) =>
          businesses.map(this.mapBusinessToRestaurant),
        ),
      );
  }

  private mapBusinessToRestaurant(business: BusinessDto): Restaurant {
    return {
      name: business.name,
      url: business.url,
      location: business.coordinates,
      cuisine: business.categories.map(({ title }) => title as CuisineType),
      distance: business.distance,
      address: business.location.display_address,
      phone: business.display_phone,
      img: business.image_url,
    };
  }
}
