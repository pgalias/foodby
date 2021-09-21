import { FC, useEffect } from 'react';
import { OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { Location } from '@foodby/commons';

interface SearchProps {
  onSearch: (location: Location) => void;
}

interface OnSearchControlSubmit {
  data: {
    x: number;
    y: number;
  };
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const provider = new OpenStreetMapProvider();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const searchControl = new SearchControl({
    style: 'bar',
    provider,
    showMarker: false,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl);
    };
  }, []);

  // cannot find other way on the lib documentation, code or GH issues
  // so currently this monkey patch is necessary...
  // eslint-disable-next-line no-proto
  searchControl.__proto__.onSubmit = ({
    data: { x, y },
  }: OnSearchControlSubmit) => {
    map.setView({ lng: x, lat: y }, 15);
    onSearch({
      latitude: y,
      longitude: x,
    });
  };

  return null;
};
