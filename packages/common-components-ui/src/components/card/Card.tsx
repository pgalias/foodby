import React, { FC } from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ className, children }) => (
  <section
    className={clsx(
      'fb-card',
      'w-11/12 md:w-3/5 lg:w-2/5 p-8',
      'bg-white text-blueGray-600',
      'rounded-lg',
      'overflow-hidden',
      className,
    )}
  >
    {children}
  </section>
);
