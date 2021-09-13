import React, { FC } from 'react';
import clsx from 'clsx';

interface SelectableTagRequiredProps {
  name: string;
}

type SelectableTagIsDisabled = {
  disabled: boolean;
  value?: never;
  isSelected?: never;
  onSelect?: never;
};

type SelectableTagIsEnabled = {
  disabled?: never;
  value: string;
  isSelected: boolean;
  onSelect: (value: string, isSelected: boolean) => void;
};

// Component have to has name property all the times
// When it has disabled property then value, isSelected & onSelect do not have to be present
// When it has value, isSelected & onSelect properties then disabled does not have to be present
type SelectableTagProps = SelectableTagRequiredProps &
  (SelectableTagIsDisabled | SelectableTagIsEnabled);

export const SelectableTag: FC<SelectableTagProps> = ({
  value,
  isSelected,
  onSelect,
  name,
  disabled,
}) => {
  const onClick = () => {
    if (!disabled) {
      onSelect?.(value as string, !isSelected);
    }
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isSelected}
      disabled={!!disabled}
      onClick={onClick}
      className={clsx(
        'fb-selectable-tag',
        'rounded-lg py-1 px-2 text-xs',
        'outline-none transition-colors',
        {
          'bg-coolGray-200 text-blueGray-600': !isSelected,
          'hover:bg-coolGray-300 focus:bg-coolGray-300':
            !isSelected && !disabled,
          'cursor-default': disabled,
          'bg-red-400 hover:bg-red-500 focus:bg-red-500 text-blueGray-100':
            isSelected,
        },
      )}
    >
      {name}
    </button>
  );
};
