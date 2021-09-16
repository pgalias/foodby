import React, { FC } from 'react';
import clsx from 'clsx';
import { Icon } from '@foodby/common-components-ui';

export const Cta: FC = () => (
  <button
    type="button"
    className={clsx(
      'absolute -top-1/4 left-1/2',
      'transform-gpu -translate-x-1/2',
      'z-above-map',
    )}
  >
    <span
      className={clsx(
        'block',
        'rounded-full',
        'bg-red-400',
        'border-4 border-double border-red-500',
        'p-3',
      )}
    >
      <Icon
        name="compass"
        size={36}
        className={clsx('fill-current text-white')}
      />
    </span>
  </button>
);
