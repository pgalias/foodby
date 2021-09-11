import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { ListController } from './list.controller';
import {
  CuisineTypeProvider,
  InMemoryCuisineTypeProvider,
} from '../../services';
import { Cuisines } from '../../models/cuisine-type';

describe('ListController', () => {
  let listController: ListController;
  let cuisineTypeProvider: CuisineTypeProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [InMemoryCuisineTypeProvider],
    }).compile();

    listController = module.get<ListController>(ListController);
    cuisineTypeProvider = module.get<CuisineTypeProvider>(
      InMemoryCuisineTypeProvider,
    );
  });

  it('should return all available cuisine types', (done) => {
    const output = [Cuisines.POLISH, Cuisines.ITALIAN, Cuisines.GREEK];

    const providerMock = jest.spyOn(cuisineTypeProvider, 'getAll');
    providerMock.mockReturnValue(of(output));

    listController.listAction().subscribe((results) => {
      expect(results).toEqual(output);
      expect(providerMock).toHaveBeenCalled();

      done();
    });
  });
});
