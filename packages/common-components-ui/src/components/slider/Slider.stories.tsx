import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider as SliderComponent } from './Slider';

export default {
  title: 'Simple/Slider',
  component: SliderComponent,
} as ComponentMeta<typeof SliderComponent>;

const Template: ComponentStory<typeof SliderComponent> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SliderComponent {...args} />
);

export const Slider = Template.bind({});
Slider.args = {
  min: 1,
  max: 5,
  step: 0.1,
  onChange: (value: number) => console.log(value),
  label: 'How do you rate our app?',
};
