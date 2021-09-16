import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvents from '@testing-library/user-event';
import { FiltersProvider, useFilterDispatch, useFilters } from './provider';
import { Types } from './types';

const TestComponent = () => {
  const dispatch = useFilterDispatch();
  const filters = useFilters();

  return (
    <>
      <p title="radius">{filters.radius}</p>
      <input
        type="number"
        placeholder="radius"
        onChange={(e) =>
          dispatch({
            type: Types.SET_RADIUS,
            payload: parseInt(e.target.value, 10),
          })
        }
      />

      <p title="latitude">{filters.location.latitude}</p>
      <p title="longitude">{filters.location.longitude}</p>
      <input
        type="text"
        placeholder="location"
        onChange={(e) => {
          const [latitude, longitude] = e.target.value
            .split(',')
            .map(parseFloat);
          dispatch({
            type: Types.SET_LOCATION,
            payload: { latitude, longitude },
          });
        }}
      />

      <p title="cuisines">{filters.cuisineTypes.join(', ')}</p>
      <input
        type="text"
        placeholder="cuisines"
        onChange={(e) =>
          dispatch({
            type: Types.SET_CUISINE_TYPES,
            payload: e.target.value.split(','),
          })
        }
      />
    </>
  );
};

describe('FiltersContext', () => {
  test('changing filters should work', () => {
    render(
      <FiltersProvider>
        <TestComponent />
      </FiltersProvider>,
    );

    const radiusText = screen.getByTitle('radius');
    const latitudeText = screen.getByTitle('latitude');
    const longitudeText = screen.getByTitle('longitude');
    const cuisinesText = screen.getByTitle('cuisines');

    const radiusInput = screen.getByPlaceholderText('radius');
    const locationInput = screen.getByPlaceholderText('location');
    const cuisinesInput = screen.getByPlaceholderText('cuisines');

    userEvents.type(radiusInput, '5000');
    userEvents.paste(locationInput, '12.432,54.432'); // paste because TestComponent is not ideal and longitude is undefined at the beginning of typing to the input field
    userEvents.type(cuisinesInput, 'italian,korean');

    expect(radiusText.textContent).toEqual('5000');
    expect(latitudeText.textContent).toEqual('12.432');
    expect(longitudeText.textContent).toEqual('54.432');
    expect(cuisinesText.textContent).toEqual('italian, korean');
  });

  test("useFilterDispatch should throw an error when it's not used inside provider", () => {
    const { result } = renderHook(() => useFilterDispatch());

    expect(result.error).toBeDefined();
  });

  test("useFilters should throw an error when it's not used inside provider", () => {
    const { result } = renderHook(() => useFilters());

    expect(result.error).toBeDefined();
  });
});
