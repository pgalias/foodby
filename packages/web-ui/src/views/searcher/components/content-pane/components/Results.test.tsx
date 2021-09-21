import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import { QueryObserverSuccessResult } from 'react-query';
import { Restaurant } from '@foodby/commons';
import { Results } from './Results';
import * as Hooks from '../../../hooks';

jest.mock('../../../contexts', () => ({
  ...(jest.requireActual('../../../contexts') as Record<string, unknown>),
  useFilters: () => ({}),
}));

describe('Results', () => {
  beforeEach(() => {
    jest.spyOn(Hooks, 'useRestaurants').mockReturnValue({
      data: [
        {
          name: 'Diner',
          url: 'https://diner.fr',
          location: { latitude: 55.093933, longitude: 14.777439 },
          cuisine: ['polish'],
          address: [
            '117 Rue Frédéric Chopin',
            'Vichy',
            'Auvergne',
            '03200 France',
          ],
          distance: 5235.41,
          phone: '+33-700-555-349',
          img: 'https://google.fr/image.png',
        },
        {
          name: 'Einen Happen essen gehen',
          url: 'https://einen-happen-essen-gehen.de',
          location: { latitude: 55.13933, longitude: 14.931947 },
          cuisine: ['italian', 'greek'],
          address: [
            'Marseiller Strasse 70',
            'Unterammergau',
            'Freistaat Bayern',
            '82497 Germany',
          ],
          distance: 432.43,
          phone: '+49 08822 51 01791',
        },
      ],
    } as QueryObserverSuccessResult<Restaurant[], Error>);
  });

  test('should render a list of cards components', () => {
    const { asFragment } = render(<Results />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render all necessary restaurant's data", () => {
    render(<Results />);

    const restaurants = screen.getAllByRole('region');
    expect(restaurants).toHaveLength(2);

    const firstRestaurant = within(restaurants[0]);
    const secondRestaurant = within(restaurants[1]);

    // restaurant name
    expect(firstRestaurant.getByRole('heading')).toHaveTextContent('Diner');
    expect(secondRestaurant.getByRole('heading')).toHaveTextContent(
      'Einen Happen essen gehen',
    );

    // restaurant address
    expect(
      firstRestaurant.getByLabelText('restaurant address'),
    ).toHaveTextContent('117 Rue Frédéric ChopinVichyAuvergne03200 France'); // br tag is seen as no space
    expect(
      secondRestaurant.getByLabelText('restaurant address'),
    ).toHaveTextContent(
      'Marseiller Strasse 70UnterammergauFreistaat Bayern82497 Germany',
    );

    // restaurant cuisines
    expect(firstRestaurant.getAllByRole('listitem')).toHaveLength(1);
    expect(firstRestaurant.getAllByRole('listitem')[0]).toHaveTextContent(
      'polish',
    );
    expect(secondRestaurant.getAllByRole('listitem')).toHaveLength(2);
    expect(secondRestaurant.getAllByRole('listitem')[0]).toHaveTextContent(
      'italian',
    );
    expect(secondRestaurant.getAllByRole('listitem')[1]).toHaveTextContent(
      'greek',
    );

    // distance
    expect(firstRestaurant.getByLabelText('Distance')).toHaveTextContent(
      '5.24 km',
    );
    expect(secondRestaurant.getByLabelText('Distance')).toHaveTextContent(
      '0.43 km',
    );

    // phone number
    expect(firstRestaurant.getByLabelText('Contact phone')).toHaveTextContent(
      '+33-700-555-349',
    );
    expect(secondRestaurant.getByLabelText('Contact phone')).toHaveTextContent(
      '+49 08822 51 01791',
    );
  });
});
