import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { PriceFilter } from './PriceFilter';
import { Types } from '../../../contexts';

const mockDispatch = jest.fn();

jest.mock('../../../contexts', () => ({
  ...(jest.requireActual('../../../contexts') as Record<string, unknown>),
  useFilterDispatch: () => mockDispatch,
  useFilters: jest.fn(() => ({
    price: '$$',
  })),
}));

describe('PriceFilter', () => {
  test('should render a card and selectable tags components', () => {
    const { asFragment } = render(<PriceFilter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should dispatch price range value when it becoming selected', () => {
    render(<PriceFilter />);
    userEvents.click(screen.getByRole('checkbox', { name: 'Very cheap' }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: Types.SET_PRICE,
      payload: '$',
    });
  });

  test('should dispatch undefined when it becoming deselected', () => {
    render(<PriceFilter />);
    userEvents.click(screen.getByRole('checkbox', { name: 'Cheap' }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: Types.SET_PRICE,
      payload: undefined,
    });
  });

  test('should render one selected tag when there is a value in store', () => {
    render(<PriceFilter />);
    expect(
      screen.queryByRole('checkbox', { checked: true }),
    ).toBeInTheDocument();
  });
});
