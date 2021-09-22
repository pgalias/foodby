import React, { FC } from 'react';
import clsx from 'clsx';
import { Card } from '@foodby/common-components-ui';
import { useFilters } from '../../contexts';
import { useRestaurants } from '../../hooks';
import { RestaurantInfo } from '../restaurant-info';
import { RestaurantContactInfo } from '../restaurant-contact-info';

export const Results: FC = () => {
  const filters = useFilters();
  const { data } = useRestaurants(filters);

  return (
    <div
      className={clsx('flex', 'overflow-x-auto', 'pl-2 md:pl-12')}
      style={{ maxWidth: 999999 }}
    >
      {data?.map((restaurant) => (
        <Card
          className={clsx('flex-shrink-0 mr-2 md:mr-12')}
          key={restaurant.name}
        >
          <div className={clsx('grid lg:grid-cols-2')}>
            {restaurant.img && (
              <div className={clsx('hidden xs:block')}>
                <img
                  src={restaurant.img}
                  alt="restaurant cover"
                  className={clsx('w-full h-40', 'object-cover', 'pr-4')}
                  loading="lazy"
                />
              </div>
            )}
            <RestaurantInfo restaurant={restaurant} />
          </div>
          <div className={clsx('flex flex-wrap', 'mt-4 xs:border-t-2')}>
            <RestaurantContactInfo
              iconName="range"
              label="Distance"
              value={`${(restaurant.distance / 1000).toFixed(2)} km`}
            />
            <RestaurantContactInfo
              iconName="telephone"
              label="Contact phone"
              value={restaurant.phone}
              isLink
              link={`tel:${restaurant.phone.replace(/ /g, '')}`}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};
