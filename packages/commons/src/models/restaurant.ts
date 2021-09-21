import { Location } from './index';

export interface Restaurant {
  name: string;
  location: Location;
  url: string;
  cuisine: string[];
  address: string[];
  distance: number;
  phone: string;
  img?: string;
}
