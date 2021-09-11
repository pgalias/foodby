import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CuisineTypeProvider } from '../cuisine-type-provider';
import { Cuisines, CuisineType } from '../../../model/cuisine-type';

@Injectable()
export class InMemoryCuisineTypeProvider implements CuisineTypeProvider {
  private readonly cuisineTypes = [
    Cuisines.FRENCH,
    Cuisines.JAPANESE,
    Cuisines.GREEK,
    Cuisines.BELGIAN,
    Cuisines.POLISH,
    Cuisines.ITALIAN,
  ];

  getAll(): Observable<CuisineType[]> {
    return of(this.cuisineTypes);
  }
}
