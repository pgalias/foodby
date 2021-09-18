import { Location } from '@foodby/commons';
import { Price } from './types';

export interface FiltersState {
  location: Location;
  radius: number;
  cuisineTypes: string[];
  price?: Price;
}

export const initialState: FiltersState = {
  // https://en.wikipedia.org/wiki/Geographical_midpoint_of_Europe#Poland :)
  location: {
    latitude: 53.57822663410753,
    longitude: 23.10680893361965,
  },
  radius: 1000,
  cuisineTypes: [],
};
