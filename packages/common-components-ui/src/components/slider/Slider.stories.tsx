import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider as SliderComponent } from './Slider';

export default {
  title: 'Simple/Slider',
  component: SliderComponent,
} as ComponentMeta<typeof SliderComponent>;

const Template: ComponentStory<typeof SliderComponent> = ({
  min,
  max,
  step,
  label,
}) => (
  <SliderComponent
    min={min}
    max={max}
    step={step}
    label={label}
    onChange={() => {}}
  />
);

export const Slider = Template.bind({});
Slider.args = {
  min: 1,
  max: 5,
  step: 0.1,
  label: 'How do you rate our app?',
};
