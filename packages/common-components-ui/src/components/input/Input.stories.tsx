import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input as InputComponent } from './Input';

export default {
  title: 'Components/Input',
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = ({
  placeholder,
  type,
  iconName,
}) => (
  <InputComponent
    onChange={(value) => console.log(value)}
    type={type}
    placeholder={placeholder}
    iconName={iconName}
  />
);

export const Input = Template.bind({});
Input.args = {
  placeholder: 'Enter you name',
  type: 'text',
  iconName: 'search',
};
