import { reducer } from './reducer';
import { FiltersState, initialState } from './state';
import { Types } from './types';

describe('filters reducer', () => {
  let state: FiltersState;
  beforeEach(() => {
    state = initialState;
  });

  test(`should merge current state with payload of ${Types.SET_LOCATION}`, () => {
    expect(
      reducer(state, {
        type: Types.SET_LOCATION,
        payload: {
          latitude: 12.434,
          longitude: 54.234,
        },
      }),
    ).toEqual({
      ...state,
      location: {
        latitude: 12.434,
        longitude: 54.234,
      },
    });
  });

  test(`should merge current state with payload of ${Types.SET_RADIUS}`, () => {
    expect(
      reducer(state, {
        type: Types.SET_RADIUS,
        payload: 4000,
      }),
    ).toEqual({
      ...state,
      radius: 4000,
    });
  });

  test(`should merge current state with payload of ${Types.SET_CUISINE_TYPES}`, () => {
    expect(
      reducer(state, {
        type: Types.SET_CUISINE_TYPES,
        payload: ['french', 'chinese'],
      }),
    ).toEqual({
      ...state,
      cuisineTypes: ['french', 'chinese'],
    });
  });

  test('should return current state when action type is not recognized', () => {
    expect(
      reducer(state, {
        // making this for testing purpose
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        type: 'FOO/BAR',
      }),
    ).toEqual(state);
  });
});
