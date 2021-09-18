import React, { FC } from 'react';
import { Card, SelectableTag } from '@foodby/common-components-ui';
import clsx from 'clsx';
import { Types, useFilterDispatch, useFilters } from '../../../contexts';
import { useCuisineTypes } from '../../../hooks';

export const CuisineFilter: FC = () => {
  const { data } = useCuisineTypes();
  const { cuisineTypes } = useFilters();
  const dispatch = useFilterDispatch();

  const onSelect = (value: string, isSelected: boolean) => {
    const currentCuisines = isSelected
      ? [...cuisineTypes, value]
      : cuisineTypes.filter((cuisine) => cuisine !== value);

    dispatch({
      type: Types.SET_CUISINE_TYPES,
      payload: currentCuisines,
    });
  };

  return (
    <Card className={clsx('mx-auto', 'h-48', 'center-y')}>
      <h3 className={clsx('text-sm text-coolGray-400', 'mb-4 -mt-5', 'block')}>
        Cuisines
      </h3>
      <div className={clsx('grid grid-cols-4 sm:grid-cols-5 gap-2')}>
        {data?.map((cuisine) => (
          <SelectableTag
            key={cuisine}
            name={cuisine}
            value={cuisine}
            isSelected={cuisineTypes.includes(cuisine)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </Card>
  );
};
