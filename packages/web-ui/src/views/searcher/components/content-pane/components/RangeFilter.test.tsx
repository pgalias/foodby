import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RangeFilter } from './RangeFilter';
import { Types } from '../../../contexts';

const mockDispatch = jest.fn();

jest.mock('../../../contexts', () => ({
  ...(jest.requireActual('../../../contexts') as Record<string, unknown>),
  useFilterDispatch: () => mockDispatch,
  useFilters: jest.fn(() => ({
    radius: 2500,
  })),
}));

describe('RangeFilter', () => {
  test('should render a card and slider components', () => {
    const { asFragment } = render(<RangeFilter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should dispatch an filter action on slider value change', () => {
    render(<RangeFilter />);
    fireEvent.change(screen.getByRole('slider'), { target: { value: '4.5' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: Types.SET_RADIUS,
      payload: 4500,
    });
  });

  test('should create a slider with initial value from current filters store', () => {
    render(<RangeFilter />);

    expect(screen.getByRole('note').textContent).toEqual('2.5');
  });
});
