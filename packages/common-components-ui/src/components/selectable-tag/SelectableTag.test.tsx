import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { SelectableTag } from './SelectableTag';

describe('SelectableTag', () => {
  test('user should be able to toggle tag state', () => {
    const onSelect = jest.fn();
    const { rerender } = render(
      <SelectableTag
        name="Foo"
        value="foo"
        isSelected={false}
        onSelect={onSelect}
      />,
    );

    const tag = screen.getByRole('checkbox', { name: /foo/i });

    userEvents.click(tag);
    expect(onSelect).toHaveBeenCalledWith('foo', true);

    rerender(
      <SelectableTag name="Foo" value="foo" isSelected onSelect={onSelect} />,
    );

    userEvents.click(tag);
    expect(onSelect).toHaveBeenCalledWith('foo', false);
  });

  test("user should not be able to click on tag when it's disabled", () => {
    render(<SelectableTag name="Foo" disabled />);
    const tag = screen.getByRole('checkbox', { name: /foo/i });

    expect(tag).toBeDisabled();
  });
});
