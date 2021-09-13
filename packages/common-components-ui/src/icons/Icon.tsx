import React, { FC } from 'react';
import Sprite from './icons-sprite.svg';

interface IconsProps {
  name:
    | 'cuisine-type'
    | 'range'
    | 'price'
    | 'attendees'
    | 'user'
    | 'search'
    | 'close';
  color?: string;
  size?: number;
}

export const Icon: FC<IconsProps> = ({ name, color = '#000', size = 32 }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Sprite}#${name}`} />
  </svg>
);
