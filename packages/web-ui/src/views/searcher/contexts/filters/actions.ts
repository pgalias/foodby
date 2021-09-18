import { Location } from '@foodby/commons';
import { Price, Types } from './types';

export type Actions =
  | {
      type: Types.SET_LOCATION;
      payload: Location;
    }
  | {
      type: Types.SET_RADIUS;
      payload: number;
    }
  | {
      type: Types.SET_CUISINE_TYPES;
      payload: string[];
    }
  | {
      type: Types.SET_PRICE;
      payload: Price | undefined;
    };
