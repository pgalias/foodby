import React, { CSSProperties, FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Location } from '@foodby/commons';
import { Search } from './search';

type WithSearch = {
  showSearch: true;
  onSearch: (location: Location) => void;
};

type WithoutSearch = {
  showSearch: false;
  onSearch?: never;
};

type MapProps = {
  center: Location;
  zoom: number;
  zoomOnScroll?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
} & (WithSearch | WithoutSearch);

export const Map: FC<MapProps> = ({
  center,
  zoom,
  showSearch = false,
  onSearch,
  zoomOnScroll = false,
  children,
  style,
  className,
}) => {
  return (
    <MapContainer
      center={{ lat: center.latitude, lng: center.longitude }}
      zoom={zoom}
      scrollWheelZoom={zoomOnScroll}
      style={style}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showSearch && (
        <Search onSearch={onSearch as (location: Location) => void} />
      )}
      {children}
    </MapContainer>
  );
};
