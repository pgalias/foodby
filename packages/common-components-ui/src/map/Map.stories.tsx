import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Map as MapComponent } from './Map';

export default {
  title: 'Map/Map',
  component: MapComponent,
} as ComponentMeta<typeof MapComponent>;

const Template: ComponentStory<typeof MapComponent> = ({
  center,
  zoom,
  zoomOnScroll,
  style,
}) => (
  <MapComponent
    center={center}
    zoom={zoom}
    zoomOnScroll={zoomOnScroll}
    style={{ height: 400, ...style }}
    showSearch={false}
  />
);

export const Map = Template.bind({});
Map.args = {
  center: {
    latitude: 54.414792427759004,
    longitude: 18.569411429474155,
  },
  zoom: 13,
  zoomOnScroll: false,
  style: {},
};
