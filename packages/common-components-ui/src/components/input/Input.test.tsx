import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  test('user should by able to type on the input', async () => {
    const mock = jest.fn();
    render(<Input onChange={mock} />);

    userEvents.type(screen.getByRole('textbox'), 'Foo Bar');

    await waitFor(() => {
      expect(mock).toHaveBeenNthCalledWith(1, 'Foo Bar');
    });
  });

  test('user should be able to clear the input by the button next to the input', () => {
    const mock = jest.fn();
    render(<Input onChange={mock} value="Foo Bar" />);

    userEvents.click(screen.getByRole('button', { name: /clear the input/i }));

    expect(mock).toHaveBeenNthCalledWith(1, '');
  });

  test('icon should show when icon name has been passed', () => {
    const { rerender } = render(
      <Input onChange={jest.fn()} iconName="price" />,
    );
    expect(screen.queryByLabelText(/price icon/i)).toBeInTheDocument();

    rerender(<Input onChange={jest.fn()} />);
    expect(screen.queryByLabelText(/price icon/i)).not.toBeInTheDocument();
  });
});
