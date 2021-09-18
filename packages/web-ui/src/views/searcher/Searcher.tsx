import React, { FC } from 'react';
import { Location } from '@foodby/commons';
import { Map } from '@foodby/common-components-ui';
import { useCuisineTypes } from './hooks';
import { ContentPane, Navigation } from './components';
import { Types, useFilterDispatch, useFilters } from './contexts';

export const Searcher: FC = () => {
  useCuisineTypes();
  const { location } = useFilters();
  const dispatch = useFilterDispatch();

  const setLocation = (newLocation: Location) => {
    dispatch({
      type: Types.SET_LOCATION,
      payload: newLocation,
    });
  };

  return (
    <div className="grid grid-rows-1 h-screen">
      <Map
        center={location}
        zoom={13}
        className="w-screen"
        showSearch
        onSearch={setLocation}
      />
      <ContentPane />
      <Navigation />
    </div>
  );
};
