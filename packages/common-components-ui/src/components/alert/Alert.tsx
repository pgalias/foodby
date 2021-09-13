import React, { FC } from 'react';
import clsx from 'clsx';
import { Icon } from '../../icons';

interface AlertProps {
  type: 'info' | 'warning' | 'danger' | 'success';
  text: string;
  id: string;
  onDismiss: (id: string) => void;
}

export const Alert: FC<AlertProps> = ({ type, text, id, onDismiss }) => {
  const containerClass = clsx(
    {
      'bg-blue-200 text-blue-800': type === 'info',
      'bg-yellow-200 text-yellow-800': type === 'warning',
      'bg-red-200 text-red-800': type === 'danger',
      'bg-green-200 text-green-800': type === 'success',
    },
    'rounded text-left relative flex',
  );

  const onClick = () => onDismiss(id);

  return (
    <div className={containerClass} role="alert">
      <span className="flex-grow py-2 px-4 text-sm">{text}</span>
      <button
        type="button"
        className="px-6"
        aria-label="Dismiss"
        onClick={onClick}
      >
        <Icon
          name="close"
          size={10}
          className="align-middle fill-current text-gray-600"
        />
      </button>
    </div>
  );
};
