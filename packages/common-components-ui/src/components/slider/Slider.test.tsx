import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
  test('user should be able to change a slider value', () => {
    const onChangeMock = jest.fn();
    render(<Slider min={1} max={5} onChange={onChangeMock} />);

    // simulate user changed the slider value
    fireEvent.change(screen.getByRole('slider'), { target: { value: '2' } });

    expect(onChangeMock).toHaveBeenCalledWith(2);
    expect(screen.getByRole('note')).toHaveTextContent('2');
  });

  test('user should see the label when proper property has been passed', () => {
    const { rerender } = render(
      <Slider min={1} max={5} onChange={jest.fn()} label="foo bar" />,
    );
    expect(screen.queryByText('foo bar')).toBeInTheDocument();

    rerender(<Slider min={1} max={5} onChange={jest.fn()} />);
    expect(screen.queryByText('foo bar')).not.toBeInTheDocument();
  });
});
