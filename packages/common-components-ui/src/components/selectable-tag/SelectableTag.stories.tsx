import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectableTag as SelectableTagComponent } from './SelectableTag';

export default {
  title: 'Simple/Selectable Tag',
  component: SelectableTagComponent,
} as ComponentMeta<typeof SelectableTagComponent>;

const Template: ComponentStory<typeof SelectableTagComponent> = ({
  disabled,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const onSelect = () => setIsSelected(!isSelected);

  if (disabled) {
    return <SelectableTagComponent name="Click on me" disabled={disabled} />;
  }

  return (
    <SelectableTagComponent
      name="Click on me"
      value="foo"
      onSelect={onSelect}
      isSelected={isSelected}
    />
  );
};

export const SelectableTag = Template.bind({});
SelectableTag.args = {
  disabled: false,
};
