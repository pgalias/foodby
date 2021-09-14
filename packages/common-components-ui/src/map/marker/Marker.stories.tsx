import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Map } from '../Map';
import { Marker as MarkerComponent } from './Marker';
import { SelectableTag } from '../../components';

export default {
  title: 'Map/Marker',
  component: MarkerComponent,
} as ComponentMeta<typeof MarkerComponent>;

const Template: ComponentStory<typeof MarkerComponent> = ({ center }) => (
  <Map center={center} zoom={12} style={{ height: 400 }}>
    <MarkerComponent center={center}>
      <h2 className="font-black text-lg">Restaurant name</h2>
      <p className="text-sm mb-0">
        <span className="italic text-xs">Address:</span> Restaurant Str 4, 80432
      </p>
      <p className="text-sm mt-0">
        <span className="italic text-xs">Distance:</span> 4.02km
      </p>
      <div className="flex justify-between">
        <SelectableTag name="Greek" disabled />
        <SelectableTag name="Turkish" disabled />
        <SelectableTag name="Mediterranean" disabled />
      </div>
    </MarkerComponent>
    <MarkerComponent
      center={{
        latitude: center.latitude + 0.02,
        longitude: center.longitude + 0.01,
      }}
    >
      <h2 className="font-black text-lg">Restaurant name</h2>
      <p className="text-sm mb-0">
        <span className="italic text-xs">Address:</span> Restaurant Str 4, 80432
      </p>
      <p className="text-sm mt-0">
        <span className="italic text-xs">Distance:</span> 4.02km
      </p>
      <div className="flex justify-between">
        <SelectableTag name="Greek" disabled />
        <SelectableTag name="Turkish" disabled />
        <SelectableTag name="Mediterranean" disabled />
      </div>
    </MarkerComponent>
  </Map>
);

export const Marker = Template.bind({});
Marker.args = {
  center: {
    latitude: 54.414792427759004,
    longitude: 18.569411429474155,
  },
};
