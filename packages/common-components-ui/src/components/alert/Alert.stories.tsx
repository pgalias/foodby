import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert as AlertComponent } from './Alert';

export default {
  title: 'Components/Alert',
  component: AlertComponent,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'danger'],
      },
    },
  },
} as ComponentMeta<typeof AlertComponent>;

const Template: ComponentStory<typeof AlertComponent> = ({ type, text }) => {
  const onDismiss = (id: string) => console.log(`Alert was dismissed ${id}`);

  return (
    <AlertComponent type={type} id="this" onDismiss={onDismiss} text={text} />
  );
};

export const Alert = Template.bind({});
Alert.args = {
  text: 'Some alert',
  type: 'info',
};
