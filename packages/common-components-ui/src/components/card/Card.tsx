import React, { FC } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => (
  <section
    className={clsx(
      'fb-card',
      'w-4/6 p-0',
      'bg-white text-blueGray-600',
      'rounded-lg',
      'overflow-hidden',
    )}
  >
    {children}
  </section>
);
