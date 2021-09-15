import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Theme/Icons',
  component: Icon,
  argTypes: {
    color: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ size, color }) => (
  <div className="w-1/2 mx-auto">
    <div className="flex flex-row flex-wrap justify-center">
      <div className="w-1/3 mb-6">
        <Icon
          name="cuisine-type"
          size={size}
          color={color}
          className="mx-auto mb-2"
        />
        <p className="text-center">cuisine-type</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon
          name="attendees"
          size={size}
          color={color}
          className="mx-auto mb-2"
        />
        <p className="text-center">attendees</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon name="close" size={size} color={color} className="mx-auto mb-2" />
        <p className="text-center">close</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon
          name="search"
          size={size}
          color={color}
          className="mx-auto mb-2"
        />
        <p className="text-center">search</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon name="range" size={size} color={color} className="mx-auto mb-2" />
        <p className="text-center">range</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon name="price" size={size} color={color} className="mx-auto mb-2" />
        <p className="text-center">price</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon name="user" size={size} color={color} className="mx-auto mb-2" />
        <p className="text-center">user</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon name="user" size={size} color={color} className="mx-auto mb-2" />
        <p className="text-center">user</p>
      </div>
      <div className="w-1/3 mb-6">
        <Icon
          name="compass"
          size={size}
          color={color}
          className="mx-auto mb-2"
        />
        <p className="text-center">compass</p>
      </div>
    </div>
  </div>
);

export const Icons = Template.bind({});
Icons.args = {
  size: 32,
  color: '#000',
};
