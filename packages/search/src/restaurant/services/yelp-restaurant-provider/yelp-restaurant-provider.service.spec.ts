import { Test } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, of } from 'rxjs';
import { YelpRestaurantProvider } from './yelp-restaurant-provider.service';
import { Cuisines } from '../../../cuisine-type/models/cuisine-type';

describe('YelpRestaurantProvider', () => {
  let httpService: HttpService;
  let yelpRestaurantProvider: YelpRestaurantProvider;
  const response = of({
    data: {
      businesses: [
        {
          name: 'restaurant 1',
          url: 'https://restaurant1.fr',
          coordinates: {
            latitude: 12.321,
            longitude: 15.643,
          },
          categories: [{ title: 'french' }],
          location: {
            display_address: [
              '117 Rue Frédéric Chopin',
              'Vichy',
              'Auvergne',
              '03200 France',
            ],
          },
          distance: 54234.543,
          display_phone: '+33-700-555-349',
          image_url: 'https://google.fr/image.jpg',
        },
        {
          name: 'restaurant 2',
          url: 'https://restaurant2.jp',
          coordinates: {
            latitude: 54.4325,
            longitude: 43.6546,
          },
          categories: [{ title: 'japanese' }],
          location: {
            display_address: [
              'ホッカイドウ, サッポロシチュウオウク, キタ10ジョウニシ, 494-1278',
              '514-1244, Kita 10-jonishi, Chuo-ku Sapporo-shi, Hokkaido',
              '060-0010 Japan',
            ],
          },
          distance: 12.435,
          display_phone: '+8167-756-7555',
        },
      ],
    },
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [YelpRestaurantProvider],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    yelpRestaurantProvider = module.get<YelpRestaurantProvider>(
      YelpRestaurantProvider,
    );
  });

  it('should return a list of restaurants', (done) => {
    const httpMock = jest.spyOn(httpService, 'get');
    httpMock.mockReturnValue(response as Observable<AxiosResponse<unknown>>);

    yelpRestaurantProvider
      .getRestaurants(
        {
          latitude: 45.543,
          longitude: 90,
        },
        2000,
        [Cuisines.FRENCH, Cuisines.JAPANESE],
      )
      .subscribe((res) => {
        expect(res).toEqual([
          {
            name: 'restaurant 1',
            url: 'https://restaurant1.fr',
            location: { latitude: 12.321, longitude: 15.643 },
            cuisine: ['french'],
            address: [
              '117 Rue Frédéric Chopin',
              'Vichy',
              'Auvergne',
              '03200 France',
            ],
            distance: 54234.543,
            phone: '+33-700-555-349',
            img: 'https://google.fr/image.jpg',
          },
          {
            name: 'restaurant 2',
            url: 'https://restaurant2.jp',
            location: { latitude: 54.4325, longitude: 43.6546 },
            cuisine: ['japanese'],
            address: [
              'ホッカイドウ, サッポロシチュウオウク, キタ10ジョウニシ, 494-1278',
              '514-1244, Kita 10-jonishi, Chuo-ku Sapporo-shi, Hokkaido',
              '060-0010 Japan',
            ],
            distance: 12.435,
            phone: '+8167-756-7555',
            img: undefined,
          },
        ]);
        expect(httpMock).toHaveBeenCalledWith(
          expect.stringContaining(
            '?term=restaurant&latitude=45.543&longitude=90&radius=2000&categories=french%2Cjapanese',
          ),
          expect.any(Object),
        );

        done();
      });
  });
});
