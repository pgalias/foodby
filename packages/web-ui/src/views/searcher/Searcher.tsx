import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Location } from '@foodby/commons';
import { Map, Marker } from '@foodby/common-components-ui';
import { useCuisineTypes, useRestaurants } from './hooks';
import { ContentPane, Navigation } from './components';
import { Types, useFilterDispatch, useFilters } from './contexts';

export const Searcher: FC = () => {
  const [markers, setMarkers] = useState<Location[]>([]);

  const filters = useFilters();
  const dispatch = useFilterDispatch();

  // we don't want to fetch data on this view (esp at the first render)
  // so we have to disable auto fetching and use refetch on particular event
  // and listen to changes on data object
  const { data, refetch } = useRestaurants(filters, { enabled: false });

  // fetch cuisines at the first render to have them stored
  // before user click on the Cuisines filter
  useCuisineTypes();

  const setLocation = (newLocation: Location) => {
    dispatch({
      type: Types.SET_LOCATION,
      payload: newLocation,
    });
  };

  useEffect(() => {
    if (data) {
      setMarkers(data?.map((restaurant) => restaurant.location));
    }
  }, [data]);

  const ctaHandler = () => {
    refetch();
  };

  return (
    <div className={clsx('grid grid-rows-1', 'h-screen')}>
      <div className={clsx('relative')}>
        <ContentPane />
        <Map
          center={filters.location}
          zoom={13}
          className={clsx('w-screen h-full')}
          showSearch
          onSearch={setLocation}
        >
          {markers.map((marker) => (
            <Marker center={marker} key={Math.random()}>
              temporary marker
            </Marker>
          ))}
        </Map>
      </div>
      <Navigation onCtaClick={ctaHandler} />
    </div>
  );
};
