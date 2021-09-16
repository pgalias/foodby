import React, { FC } from 'react';
import clsx from 'clsx';

import { Button } from './Button';
import { Cta } from './Cta';

export const Navigation: FC = () => {
  return (
    <nav className={clsx('bg-white')}>
      <div className={clsx('flex', 'container')}>
        <div className={clsx('flex w-2/5')}>
          <Button iconName="range" isActive={false} name="Range" />
          <Button iconName="cuisine-type" isActive={false} name="Cuisines" />
        </div>
        <div className={clsx('flex w-1/5 relative')}>
          <Cta />
        </div>
        <div className={clsx('flex w-2/5')}>
          <Button iconName="price" isActive name="Price" />
          <Button
            iconName="attendees"
            isActive={false}
            name="Attendees"
            disabled
            whyDisabled="Filter is not available for non logged users"
          />
        </div>
      </div>
    </nav>
  );
};
