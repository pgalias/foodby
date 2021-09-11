import { Location } from '@foodby/commons';
import { CuisineType } from '../../cuisine-type/models/cuisine-type';

export interface Restaurant {
  name: string;
  location: Location;
  url: string;
  cuisine: CuisineType[];
}