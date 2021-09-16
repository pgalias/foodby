import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Icon, IconName } from '@foodby/common-components-ui';

type Disabled = {
  disabled: true;
  whyDisabled: string;
};

type Enabled = {
  disabled?: never;
  whyDisabled?: never;
};

type ButtonProps = {
  iconName: IconName;
  isActive: boolean;
  name: string;
} & (Disabled | Enabled);

export const Button: FC<ButtonProps> = ({
  iconName,
  isActive,
  name,
  disabled,
  whyDisabled,
}) => {
  const [focused, setFocused] = useState(false);
  const onClick = () => setFocused(!focused);
  const onBlur = () => setFocused(false);

  return (
    <button
      type="button"
      className={clsx('w-1/2 py-7 relative')}
      onClick={onClick}
      onBlur={onBlur}
    >
      {disabled && focused && (
        <span
          className={clsx(
            'absolute -left-0 z-above-map',
            'text-black text-xs',
            'bg-white border-2 border-blueGray-100',
            'w-fit p-0.5',
          )}
        >
          {whyDisabled}
        </span>
      )}
      <Icon
        name={iconName}
        size={32}
        className={clsx('fill-current', 'block mx-auto mb-2', {
          'text-coolGray-600': !isActive && !disabled,
          'text-red-400': isActive && !disabled,
          'text-coolGray-400': disabled,
        })}
      />
      <p
        className={clsx('text-sm', {
          'text-coolGray-600': !disabled,
          'text-coolGray-400': disabled,
        })}
      >
        {name}
      </p>
    </button>
  );
};
