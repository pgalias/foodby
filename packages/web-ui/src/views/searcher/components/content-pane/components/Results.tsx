import React, { FC } from 'react';
import clsx from 'clsx';
import { Card, Icon, SelectableTag } from '@foodby/common-components-ui';
import { useFilters } from '../../../contexts';
import { useRestaurants } from '../../../hooks';

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
            <div className={clsx('grid')}>
              <h3 className={clsx('font-bold')}>
                <a
                  href={restaurant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              </p>
              <ul
                className={clsx('flex flex-wrap items-end', 'mt-2')}
                aria-label="cuisine types"
              >
                {restaurant.cuisine.map((cuisine) => (
                  <li
                    key={cuisine}
                    className={clsx('mr-1')}
                    aria-label={cuisine}
                  >
                    <SelectableTag name={cuisine} disabled />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={clsx('flex flex-wrap', 'mt-4 xs:border-t-2')}>
            <div
              className={clsx(
                'w-full pt-4 xs:w-1/2 xs:border-r-2',
                'flex xs:justify-center items-center',
              )}
            >
              <div className={clsx('pr-4')}>
                <Icon
                  name="range"
                  size={46}
                  className={clsx('fill-current', 'text-coolGray-500')}
                />
              </div>
              <div>
                <p
                  id="distance-label"
                  className={clsx('text-sm text-coolGray-400')}
                >
                  Distance
                </p>
                <span
                  className={clsx('text-sm')}
                  aria-labelledby="distance-label"
                >
                  {(restaurant.distance / 1000).toFixed(2)} km
                </span>
              </div>
            </div>
            <div
              className={clsx(
                'w-full pt-4 xs:w-1/2',
                'flex xs:justify-center items-center',
              )}
            >
              <div className={clsx('pr-4')}>
                <Icon
                  name="telephone"
                  size={46}
                  className={clsx('fill-current text-coolGray-500')}
                />
              </div>
              <div>
                <p
                  id="contact-phone-label"
                  className={clsx('text-sm text-coolGray-400')}
                >
                  Contact phone
                </p>
                <a
                  className={clsx('text-sm')}
                  href={`tel:${restaurant.phone.replace(/ /g, '')}`}
                  aria-labelledby="contact-phone-label"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
