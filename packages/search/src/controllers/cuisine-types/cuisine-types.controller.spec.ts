import { Test, TestingModule } from '@nestjs/testing';
import { CuisineTypesController } from './cuisine-types.controller';
import {
  CuisineTypeProvider,
  InMemoryCuisineTypeProvider,
} from '../../services/cuisine-type';
import { Cuisines } from '../../model/cuisine-type';
import { of } from 'rxjs';

describe('CuisineTypesController', () => {
  let cuisineTypesController: CuisineTypesController;
  let cuisineTypeProvider: CuisineTypeProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuisineTypesController],
      providers: [InMemoryCuisineTypeProvider],
    }).compile();

    cuisineTypesController = module.get<CuisineTypesController>(
      CuisineTypesController,
    );
    cuisineTypeProvider = module.get<CuisineTypeProvider>(
      InMemoryCuisineTypeProvider,
    );
  });

  it('should return all available cuisine types', (done) => {
    const output = [Cuisines.POLISH, Cuisines.ITALIAN, Cuisines.GREEK];

    const providerMock = jest.spyOn(cuisineTypeProvider, 'getAll');
    providerMock.mockReturnValue(of(output));

    cuisineTypesController.getCuisineTypes().subscribe((results) => {
      expect(results).toEqual(output);
      expect(providerMock).toHaveBeenCalled();

      done();
    });
  });
});
