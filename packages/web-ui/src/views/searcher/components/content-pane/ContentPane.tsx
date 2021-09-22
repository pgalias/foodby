import React, { FC } from 'react';
import clsx from 'clsx';
import { ContentPageState, useCurrentPaneState } from '../../contexts';
import { CuisineFilter } from '../cuisine-filter';
import { PriceFilter } from '../price-filter';
import { RangeFilter } from '../range-filter';
import { Results } from '../results';

const stateToComponentMap = {
  [ContentPageState.NONE]: () => null,
  [ContentPageState.RANGE_FILTER]: RangeFilter,
  [ContentPageState.CUISINE_FILTER]: CuisineFilter,
  [ContentPageState.PRICE_RANGE_FILTER]: PriceFilter,
  [ContentPageState.ATTENDEES_FILTER]: () => null,
  [ContentPageState.RESULTS]: Results,
};

export const ContentPane: FC = () => {
  const currentState = useCurrentPaneState();
  const Component = stateToComponentMap[currentState];

  return (
    <div
      className={clsx('absolute bottom-10', 'z-above-map', 'w-full')}
      aria-live="polite"
    >
      <Component />
    </div>
  );
};
