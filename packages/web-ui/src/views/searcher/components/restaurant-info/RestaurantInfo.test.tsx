import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Restaurant } from '@foodby/commons';
import { RestaurantInfo } from './RestaurantInfo';

describe('RestaurantInfo', () => {
  const restaurant: Restaurant = {
    cuisine: ['burger'],
    distance: 123.43,
    location: {
      latitude: 1,
      longitude: 2,
    },
    phone: '+49 432 653 453',
    url: 'https://foo.bar',
    name: 'foo',
    address: ['Foo str 2', '43254 Bar'],
  };

  test('should render restaurant info without phone number when addPhone prop is falsy', () => {
    render(<RestaurantInfo restaurant={restaurant} />);
    expect(
      screen.queryByRole('link', { name: restaurant.phone }),
    ).not.toBeInTheDocument();
  });

  test('should render restaurant info with clickable phone number when addPhone prop is truthy', () => {
    render(<RestaurantInfo restaurant={restaurant} addPhone />);
    expect(
      screen.queryByRole('link', { name: restaurant.phone }),
    ).toBeInTheDocument();
  });
});
