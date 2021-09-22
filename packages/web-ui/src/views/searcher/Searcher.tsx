import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Icon } from 'leaflet';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Location, Restaurant } from '@foodby/commons';
import { Map, Marker } from '@foodby/common-components-ui';
import { useCuisineTypes, useRestaurants } from './hooks';
import { ContentPane, Navigation } from './components';
import { Types, useFilterDispatch, useFilters } from './contexts';

export const Searcher: FC = () => {
  const [markers, setMarkers] = useState<Restaurant[]>([]);

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
      setMarkers(data);
    }
  }, [data]);

  const ctaHandler = () => {
    refetch();
  };

  const icon = new Icon({
    iconUrl: MarkerIcon,
    shadowUrl: MarkerShadow,
  });

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
          {markers.map((restaurant) => (
            <Marker
              center={restaurant.location}
              key={restaurant.name}
              icon={icon}
            >
              temporary marker
            </Marker>
          ))}
        </Map>
      </div>
      <Navigation onCtaClick={ctaHandler} />
    </div>
  );
};
