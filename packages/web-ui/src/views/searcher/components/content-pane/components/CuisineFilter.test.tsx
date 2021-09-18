import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { CuisineFilter } from './CuisineFilter';
import { Types } from '../../../contexts';

const mockDispatch = jest.fn();

jest.mock('../../../contexts', () => ({
  ...(jest.requireActual('../../../contexts') as Record<string, unknown>),
  useFilterDispatch: () => mockDispatch,
  useFilters: jest.fn(() => ({
    cuisineTypes: ['french', 'bulgarian'],
  })),
}));

jest.mock('../../../hooks', () => ({
  ...(jest.requireActual('../../../hooks') as Record<string, unknown>),
  useCuisineTypes: jest.fn(() => ({
    data: ['french', 'italian', 'polish', 'belgian', 'bulgarian', 'japanese'],
  })),
}));

describe('CuisineFilter', () => {
  test('should render a card and selectable tags components', () => {
    const { asFragment } = render(<CuisineFilter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should select cuisine tags based on the value of cuisine types from the filters store', () => {
    render(<CuisineFilter />);
    expect(screen.queryAllByRole('checkbox', { checked: true })).toHaveLength(
      2,
    );
  });

  test('should dispatch an action with collection of cuisines extended with clicked one when it was not selected previously', () => {
    render(<CuisineFilter />);
    userEvents.click(screen.getByRole('checkbox', { name: 'japanese' }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: Types.SET_CUISINE_TYPES,
      payload: ['french', 'bulgarian', 'japanese'],
    });
  });

  test('should dispatch an action with a collection of cuisines reduced by clicked one when it was selected previously', () => {
    render(<CuisineFilter />);
    userEvents.click(screen.getByRole('checkbox', { name: 'french' }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: Types.SET_CUISINE_TYPES,
      payload: ['bulgarian'],
    });
  });
});
