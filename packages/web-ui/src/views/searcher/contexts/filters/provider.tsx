import React, { FC, useContext, useReducer } from 'react';
import { FiltersState, initialState } from './state';
import { Actions } from './actions';
import { reducer } from './reducer';

interface FiltersContext {
  filters: FiltersState;
  dispatch: React.Dispatch<Actions>;
}

const Context = React.createContext<FiltersContext | undefined>(undefined);

export const useFilterDispatch = (): React.Dispatch<Actions> => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useFilterDispatch must be used within FiltersContext');
  }

  return context.dispatch;
};

export const useFilters = (): FiltersState => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useFilters must be used within FiltersContext');
  }

  return context.filters;
};

export const FiltersProvider: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [filters, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ filters, dispatch }}>
      {children}
    </Context.Provider>
  );
};
