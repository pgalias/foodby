import React, { FC } from 'react';
import { Restaurant } from '@foodby/commons';
import clsx from 'clsx';
import { SelectableTag } from '@foodby/common-components-ui';
import styles from './RestaurantInfo.module.css';

interface RestaurantInfoProps {
  restaurant: Restaurant;
  addPhone?: boolean;
}

export const RestaurantInfo: FC<RestaurantInfoProps> = ({
  restaurant,
  addPhone,
}) => (
  <div className={clsx('grid', styles.RestaurantInfo)}>
    <h3 className={clsx('font-bold text-blue-400')}>
      <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
        {restaurant.name}
      </a>
    </h3>
    <p className={clsx('text-sm')} aria-label="restaurant address">
      {restaurant.address.map((address) => (
        <React.Fragment key={address}>
          {address}
          <br />
        </React.Fragment>
      ))}
      {addPhone && (
        <a href={`tel:${restaurant.phone.replace(/ /g, '')}`}>
          {restaurant.phone}
        </a>
      )}
    </p>
    <ul
      className={clsx('flex flex-wrap items-end', 'mt-2')}
      aria-label="cuisine types"
    >
      {restaurant.cuisine.map((cuisine) => (
        <li key={cuisine} className={clsx('mr-1 pt-1')} aria-label={cuisine}>
          <SelectableTag name={cuisine} disabled />
        </li>
      ))}
    </ul>
  </div>
);
