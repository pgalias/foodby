import React, { FC } from 'react';
import clsx from 'clsx';
import { ContentPageState, useCurrentPaneState } from '../../contexts';
import { CuisineFilter, RangeFilter } from './components';

const stateToComponentMap = {
  [ContentPageState.NONE]: () => null,
  [ContentPageState.RANGE_FILTER]: RangeFilter,
  [ContentPageState.CUISINE_FILTER]: CuisineFilter,
  [ContentPageState.PRICE_RANGE_FILTER]: () => null,
  [ContentPageState.ATTENDEES_FILTER]: () => null,
  [ContentPageState.RESULTS]: () => null,
};

export const ContentPane: FC = () => {
  const currentState = useCurrentPaneState();
  const Component = stateToComponentMap[currentState];

  return (
    <div className={clsx('absolute', 'z-above-map', 'w-full')}>
      <Component />
    </div>
  );
};
