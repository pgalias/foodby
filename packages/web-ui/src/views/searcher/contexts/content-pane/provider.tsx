import React, { FC, useContext, useState } from 'react';

export enum States {
  NONE,
  RANGE_FILTER,
  CUISINE_FILTER,
  PRICE_RANGE_FILTER,
  ATTENDEES_FILTER,
  RESULTS,
}

interface ContentState {
  current: States;
  setCurrent: (newState: States) => void;
}

const Context = React.createContext<ContentState | undefined>(undefined);

export const useCurrentPaneState = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      'useCurrentPaneState must be used within a ContentPaneContext',
    );
  }

  return context.current;
};

export const useChangeCurrentPaneState = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      'useChangeCurrentContentState must be used within a ContentPaneContext',
    );
  }

  return context.setCurrent;
};

export const ContentPaneProvider: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [state, setState] = useState(States.NONE);

  const changeState = (newState: States) => {
    setState((currentState) =>
      currentState === newState ? States.NONE : newState,
    );
  };

  return (
    <Context.Provider value={{ current: state, setCurrent: changeState }}>
      {children}
    </Context.Provider>
  );
};
