import React, { FC } from 'react';
import clsx from 'clsx';
import { ContentPageState } from '../../contexts';
import { Button } from './Button';
import { Cta } from './Cta';

export const Navigation: FC = () => (
  <nav className={clsx('bg-white')}>
    <div className={clsx('flex', 'container')}>
      <div className={clsx('flex w-2/5')}>
        <Button
          iconName="range"
          stateName={ContentPageState.RANGE_FILTER}
          name="Range"
        />
        <Button
          iconName="cuisine-type"
          stateName={ContentPageState.CUISINE_FILTER}
          name="Cuisines"
        />
      </div>
      <div className={clsx('flex w-1/5 relative')}>
        <Cta />
      </div>
      <div className={clsx('flex w-2/5')}>
        <Button
          iconName="price"
          stateName={ContentPageState.PRICE_RANGE_FILTER}
          name="Price"
        />
        <Button
          iconName="attendees"
          stateName={ContentPageState.ATTENDEES_FILTER}
          name="Attendees"
          disabled
          whyDisabled="Filter is not available for non logged users"
        />
      </div>
    </div>
  </nav>
);
