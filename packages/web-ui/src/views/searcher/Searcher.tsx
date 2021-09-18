import React, { FC, useEffect, useState } from 'react';
import { Location } from '@foodby/commons';
import { Map } from '@foodby/common-components-ui';
import { useCuisineTypes } from './hooks';
import { Navigation, ContentPane } from './components';

export const Searcher: FC = () => {
  const { data } = useCuisineTypes();
  const [location, setLocation] = useState<Location>({
    latitude: 54.414792427759004,
    longitude: 18.569411429474155,
  });
  const [types, setTypes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (data?.length) {
      setTypes(
        data.reduce(
          (accumulator, current) => ({
            ...accumulator,
            [current]: false,
          }),
          {},
        ),
      );
    }
  }, [data]);

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
