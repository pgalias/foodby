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
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="cuisine-type" size={size} color={color} />
        </p>
        <p className="text-center">cuisine-type</p>
      </div>
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="attendees" size={size} color={color} />
        </p>
        <p className="text-center">attendees</p>
      </div>
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="close" size={size} color={color} />
        </p>
        <p className="text-center">close</p>
      </div>
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="search" size={size} color={color} />
        </p>
        <p className="text-center">search</p>
      </div>
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="range" size={size} color={color} />
        </p>
        <p className="text-center">range</p>
      </div>
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="price" size={size} color={color} />
        </p>
        <p className="text-center">price</p>
      </div>
      <div className="w-1/3">
        <p className="text-center">
          <Icon name="user" size={size} color={color} />
        </p>
        <p className="text-center">user</p>
      </div>
    </div>
  </div>
);

export const Icons = Template.bind({});
Icons.args = {
  size: 32,
  color: '#000',
};
