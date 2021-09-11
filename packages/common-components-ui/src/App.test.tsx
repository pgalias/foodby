import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';

describe('foo', () => {
  test('should render bar', () => {
    const mock = jest.fn();
    render(
      <button type="button" onClick={mock}>
        Click me!
      </button>,
    );

    userEvents.click(screen.getByRole('button'));

    expect(mock).toHaveBeenCalled();
  });
});
