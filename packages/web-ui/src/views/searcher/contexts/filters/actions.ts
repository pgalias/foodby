import { Location } from '@foodby/commons';
import { Types } from './types';

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
    };
