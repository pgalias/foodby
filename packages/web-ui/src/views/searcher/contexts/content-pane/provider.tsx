import React, { FC, useContext, useState } from 'react';

export enum ContentPageState {
  NONE,
  RANGE_FILTER,
  CUISINE_FILTER,
  PRICE_RANGE_FILTER,
  ATTENDEES_FILTER,
  RESULTS,
}

interface ContentState {
  current: ContentPageState;
  setCurrent: (newState: ContentPageState) => void;
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
  const [state, setState] = useState(ContentPageState.NONE);

  const changeState = (newState: ContentPageState) => {
    setState((currentState) =>
      currentState === newState ? ContentPageState.NONE : newState,
    );
  };

  return (
    <Context.Provider value={{ current: state, setCurrent: changeState }}>
      {children}
    </Context.Provider>
  );
};
