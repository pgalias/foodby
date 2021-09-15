import React, { ChangeEvent, FC, useState } from 'react';
import clsx from 'clsx';
import uniqueId from 'lodash.uniqueid';
import debounce from 'lodash.debounce';
import { Icon, IconName } from '../../icons';

interface InputProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  type?: string;
  iconName?: IconName;
  className?: string;
}

const INPUT_DEBOUNCE_TIME = 400;

export const Input: FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  type = 'text',
  iconName,
  className,
}) => {
  const [id] = useState<string>(uniqueId('Input_'));

  const onInputChange = debounce(
    ({ target: { value: currentValue } }: ChangeEvent<HTMLInputElement>) => {
      onChange(currentValue);
    },
    INPUT_DEBOUNCE_TIME,
  );

  return (
    <div className={clsx('fb-input', 'flex', className)}>
      {iconName && (
        <label
          className={clsx(
            'inline-block',
            'pr-2 mr-2 border-r-2',
            'flex items-center',
          )}
          htmlFor={id}
        >
          <Icon
            name={iconName}
            size={16}
            className="fill-current text-coolGray-400"
          />
        </label>
      )}
      <input
        className={clsx('text-lg text-blueGray-600', 'flex-grow')}
        type={type}
        onChange={onInputChange}
        id={id}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
};
