import React, { FC } from 'react';
import { Icon } from 'leaflet';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import { Location } from '@foodby/commons';

interface MarkerProps {
  center: Location;
  icon?: Icon;
  children: React.ReactNode;
}

export const Marker: FC<MarkerProps> = ({ center, icon, children }) => {
  return (
    <LeafletMarker
      position={{ lat: center.latitude, lng: center.longitude }}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...(icon ? { icon } : {})}
    >
      <Popup>{children}</Popup>
    </LeafletMarker>
  );
};
