import React, { FC, useState } from 'react';
import { Card, Slider } from '@foodby/common-components-ui';
import clsx from 'clsx';
import { Types, useFilterDispatch, useFilters } from '../../contexts';

export const RangeFilter: FC = () => {
  const { radius } = useFilters();
  const dispatch = useFilterDispatch();
  const [value, setValue] = useState(radius / 1000);

  const onChange = (newValue: number) => {
    setValue(newValue);
    dispatch({
      type: Types.SET_RADIUS,
      payload: newValue * 1000, // value have to be passed in meters
    });
  };

  return (
    <Card className={clsx('mx-auto', 'h-48', 'center-y')}>
      <Slider
        min={1}
        max={40}
        onChange={onChange}
        step={0.1}
        label="Range (km)"
        value={value}
      />
    </Card>
  );
};
