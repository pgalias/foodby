import React, { FC } from 'react';
import { Card, SelectableTag } from '@foodby/common-components-ui';
import clsx from 'clsx';
import { Price, Types, useFilterDispatch, useFilters } from '../../contexts';

const possiblePrices = {
  $: 'Very cheap',
  $$: 'Cheap',
  $$$: 'Could be cheaper',
  $$$$: 'Expensive',
};

export const PriceFilter: FC = () => {
  const { price } = useFilters();
  const dispatch = useFilterDispatch();

  const onSelect = (newPrice: string, isSelected: boolean) => {
    dispatch({
      type: Types.SET_PRICE,
      payload: isSelected ? (newPrice as Price) : undefined,
    });
  };

  return (
    <Card className={clsx('mx-auto', 'h-48', 'center-y', 'lg:w-3/5')}>
      <h3 className={clsx('text-sm text-coolGray-400', 'mb-4 -mt-5', 'block')}>
        Price
      </h3>
      <div className={clsx('grid grid-cols-2 sm:grid-cols-4 gap-2')}>
        {Object.entries(possiblePrices).map(([value, name]) => (
          <SelectableTag
            key={value}
            name={name}
            value={value}
            onSelect={onSelect}
            isSelected={price === value}
          />
        ))}
      </div>
    </Card>
  );
};
