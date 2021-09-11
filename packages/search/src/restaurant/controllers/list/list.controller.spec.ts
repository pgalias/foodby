import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { of } from 'rxjs';
import { Location } from '@foodby/commons';
import { ListController } from './list.controller';
import { RestaurantProvider, YelpRestaurantProvider } from '../../services';
import {
  Cuisines,
  CuisineType,
} from '../../../cuisine-type/models/cuisine-type';

describe('ListController', () => {
  let restaurantsController: ListController;
  let restaurantProvider: RestaurantProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ListController],
      providers: [YelpRestaurantProvider],
    }).compile();

    restaurantsController = module.get<ListController>(ListController);
    restaurantProvider = module.get<RestaurantProvider>(YelpRestaurantProvider);
  });

  it('should make a call for a restaurants with passed params', (done) => {
    const input: [Location, number, CuisineType[]] = [
      { latitude: 54.420741, longitude: 18.584566 },
      4000,
      [Cuisines.POLISH],
    ];
    const output = [
      {
        name: 'Pierogarnia Mandu',
        url: 'https://yelp.com/biz/pierogarnia-mandu-gdansk?adjust_creative=wkQkZieArHE6lMIcAJ0pyg',
        location: { latitude: 54.40906544334, longitude: 18.567173480988 },
        cuisine: [Cuisines.POLISH],
      },
    ];

    const restaurantProviderMock = jest.spyOn(
      restaurantProvider,
      'getRestaurants',
    );
    restaurantProviderMock.mockReturnValue(of(output));

    restaurantsController.listAction(input).subscribe((results) => {
      expect(results).toEqual(output);
      expect(restaurantProviderMock).toHaveBeenCalledWith(
        input[0],
        input[1],
        input[2],
      );

      done();
    });
  });
});
