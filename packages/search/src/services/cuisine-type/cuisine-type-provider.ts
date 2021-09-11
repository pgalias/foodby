import { Observable } from 'rxjs';
import { CuisineType } from '../../model/cuisine-type';

export interface CuisineTypeProvider {
  getAll(): Observable<CuisineType[]>;
}
