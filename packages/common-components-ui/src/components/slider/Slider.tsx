import React, { ChangeEvent, FC, useState } from 'react';
import clsx from 'clsx';
import uniqueId from 'lodash.uniqueid';
import styles from './Slider.module.css';

interface SliderProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
  step?: number;
  value?: number;
  label?: string;
}

export const Slider: FC<SliderProps> = ({
  min,
  max,
  onChange,
  step = 1,
  value = min,
  label,
}) => {
  const [id] = useState<string>(uniqueId('Slider_'));
  const [inputValue, setInputValue] = useState(value);

  const onInputChange = ({
    target: { value: currentValue },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseFloat(currentValue));
    onChange(parseFloat(currentValue));
  };

  return (
    <div className="fb-slider">
      {label && (
        <label
          className={clsx('text-sm text-coolGray-400', 'mb-4', 'block')}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={clsx('flex justify-between items-center')}>
        <span className={clsx(styles.SliderNumber, 'pr-2')}>{min}</span>
        <input
          className={styles.Slider}
          type="range"
          min={min}
          max={max}
          step={step}
          id={id}
          defaultValue={value}
          onChange={onInputChange}
        />
        <span className={clsx(styles.SliderNumber, 'pl-2')}>{max}</span>
      </div>
      <span
        className={clsx(styles.SliderNumber, 'block pt-1')}
        aria-live="polite"
        role="note"
      >
        {inputValue}
      </span>
    </div>
  );
};
