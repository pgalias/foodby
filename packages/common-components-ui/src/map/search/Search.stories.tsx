import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Map } from '../Map';
import { Search as SearchComponent } from './Search';

export default {
  title: 'Map/Search',
  component: SearchComponent,
} as ComponentMeta<typeof SearchComponent>;

const Template: ComponentStory<typeof SearchComponent> = () => (
  <Map
    showSearch={true}
    onSearch={console.log}
    center={{
      latitude: 54.414792427759004,
      longitude: 18.569411429474155,
    }}
    zoom={12}
    style={{ height: 400 }}
  />
);

export const Search = Template.bind({});
