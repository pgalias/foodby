import React, { FC } from 'react';
import clsx from 'clsx';
import kebabCase from 'lodash.kebabcase';
import { Icon, IconName } from '@foodby/common-components-ui';
import styles from './RestaurantContactInfo.module.css';

type IsLink = {
  isLink: true;
  link: string;
};

type IsNotLink = {
  isLink?: never;
  link?: never;
};

type RestaurantContactInfoProps = {
  iconName: IconName;
  label: string;
  value: string;
} & (IsLink | IsNotLink);

export const RestaurantContactInfo: FC<RestaurantContactInfoProps> = ({
  iconName,
  label,
  value,
  isLink,
  link,
}) => {
  const labelId = `${kebabCase(label)}-label`;

  return (
    <div
      className={clsx(
        'w-full pt-4 xs:w-1/2',
        'flex xs:justify-center items-center',
        styles.RestaurantContactInfo,
      )}
    >
      <div className={clsx('pr-4')}>
        <Icon
          name={iconName}
          size={46}
          className={clsx('fill-current text-coolGray-500')}
        />
      </div>
      <div>
        <p id={labelId} className={clsx('text-sm text-coolGray-400')}>
          {label}
        </p>
        {isLink ? (
          <a className={clsx('text-sm')} href={link} aria-labelledby={labelId}>
            {value}
          </a>
        ) : (
          <span
            className={clsx('text-sm')}
            aria-labelledby={labelId}
            role="presentation"
          >
            {value}
          </span>
        )}
      </div>
    </div>
  );
};
