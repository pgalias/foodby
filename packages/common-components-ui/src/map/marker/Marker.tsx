import React, { FC } from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import { Location } from '@foodby/commons';

interface MarkerProps {
  center: Location;
  children: React.ReactNode;
}

export const Marker: FC<MarkerProps> = ({ center, children }) => {
  return (
    <LeafletMarker position={{ lat: center.latitude, lng: center.longitude }}>
      <Popup>{children}</Popup>
    </LeafletMarker>
  );
};
