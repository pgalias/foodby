import React, { FC } from 'react';
import Sprite from './icons-sprite.svg';

export type IconName =
  | 'cuisine-type'
  | 'range'
  | 'price'
  | 'attendees'
  | 'user'
  | 'search'
  | 'close'
  | 'compass'
  | 'telephone';

interface IconsProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon: FC<IconsProps> = ({
  name,
  color = '#000',
  size = 32,
  className,
}) => (
  <svg
    className={`icon icon-${name} ${className}`}
    fill={color}
    width={size}
    height={size}
    role="img"
    aria-label={`${name} icon`}
  >
    <use xlinkHref={`${Sprite}#${name}`} />
  </svg>
);
