import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card as CardComponent } from './Card';
import { SelectableTag } from '../selectable-tag';
import { Icon } from '../../icons';

export default {
  title: 'Components/Card',
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = () => (
  <div className="bg-gray-600 py-12">
    <CardComponent>
      <img
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/southern-fried-prawns-5d10921.jpg?quality=90&resize=440,400"
        alt="prawns"
        className="w-full h-56 object-cover"
      />
      <h4 className="font-black text-lg text-center m-0">
        Tasty prawns restaurant
      </h4>
      <p className="text-sm text-justify pb-3 px-4 mb-0 border-b-2 border-b-gray-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque
        cupiditate dolorem earum, explicabo fugit impedit incidunt, minima
        obcaecati pariatur quas
      </p>
      <div className="flex justify-around mt-3">
        <div className="w-1/3">
          <div className="flex items-center">
            <div className="w-1/4">
              <Icon
                className="text-gray-600 fill-current"
                name="range"
                size={36}
              />
            </div>
            <div className="w-3/4">
              <h4>40.5km</h4>
              <p className="mt-0">
                <small>Distance from city centre</small>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex items-center">
            <div className="w-1/4">
              <Icon
                className="text-gray-600 fill-current"
                name="cuisine-type"
                size={36}
              />
            </div>
            <div className="w-3/4">
              <div>
                <SelectableTag name="Sea food" disabled />
                <SelectableTag name="French" disabled />
              </div>
              <p className="mt-0">
                <small>Cuisine types</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardComponent>
  </div>
);

export const Card = Template.bind({});
