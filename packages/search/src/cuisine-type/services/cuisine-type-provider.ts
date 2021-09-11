import { Observable } from 'rxjs';
import { CuisineType } from '../models/cuisine-type';

export interface CuisineTypeProvider {
  getAll(): Observable<CuisineType[]>;
}
