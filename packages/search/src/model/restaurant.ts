import { Location } from './location';
import { CuisineType } from './cuisineType';

export interface Restaurant {
  name: string;
  location: Location;
  url: string;
  cuisine: CuisineType[];
}
