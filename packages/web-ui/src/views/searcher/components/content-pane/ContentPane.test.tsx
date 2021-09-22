import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentPane } from './ContentPane';
import { CuisineFilter } from '../cuisine-filter';
import { PriceFilter } from '../price-filter';
import { RangeFilter } from '../range-filter';
import { Results } from '../results';
import { ContentPageState, useCurrentPaneState } from '../../contexts';

jest.mock('../../contexts', () => ({
  ...(jest.requireActual('../../contexts') as Record<string, unknown>),
  useCurrentPaneState: jest.fn(),
}));

jest.mock('../cuisine-filter', () => ({
  CuisineFilter: jest.fn(() => 'cuisine filter'),
}));

jest.mock('../price-filter', () => ({
  PriceFilter: jest.fn(() => 'price filter'),
}));

jest.mock('../range-filter', () => ({
  RangeFilter: jest.fn(() => 'range filter'),
}));

jest.mock('../results', () => ({
  Results: jest.fn(() => 'results'),
}));

describe('ContentPane', () => {
  test.each`
    currentContentPageState                | what                | component
    ${ContentPageState.CUISINE_FILTER}     | ${'cuisine filter'} | ${CuisineFilter}
    ${ContentPageState.PRICE_RANGE_FILTER} | ${'price filter'}   | ${PriceFilter}
    ${ContentPageState.RANGE_FILTER}       | ${'range filter'}   | ${RangeFilter}
    ${ContentPageState.RESULTS}            | ${'results'}        | ${Results}
  `(
    'should render $what when current content page state is equal to $currentContentPageState',
    ({ currentContentPageState, component }) => {
      (useCurrentPaneState as jest.Mock).mockReturnValue(
        currentContentPageState,
      );
      render(<ContentPane />);

      expect(component).toHaveBeenCalled();
    },
  );

  test('should render nothing when current content page state is equal to NONE', () => {
    (useCurrentPaneState as jest.Mock).mockReturnValue(ContentPageState.NONE);
    render(<ContentPane />);

    expect(screen.getByRole('region')).toBeEmptyDOMElement();
  });
});
