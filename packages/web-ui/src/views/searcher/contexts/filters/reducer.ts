import { FiltersState } from './state';
import { Actions } from './actions';
import { Types } from './types';

export const reducer = (state: FiltersState, action: Actions): FiltersState => {
  switch (action.type) {
    case Types.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case Types.SET_RADIUS:
      return {
        ...state,
        radius: action.payload,
      };
    case Types.SET_CUISINE_TYPES:
      return {
        ...state,
        cuisineTypes: action.payload,
      };
    default:
      return state;
  }
};
