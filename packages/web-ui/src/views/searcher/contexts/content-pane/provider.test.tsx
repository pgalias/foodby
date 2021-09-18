import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import {
  ContentPaneProvider,
  ContentPageState,
  useChangeCurrentPaneState,
  useCurrentPaneState,
} from './provider';

const TestComponent = () => {
  const currentState = useCurrentPaneState();
  const setState = useChangeCurrentPaneState();

  return (
    <>
      <button type="button" onClick={() => setState(ContentPageState.RESULTS)}>
        Change to Results
      </button>
      <p title="state">{currentState}</p>
    </>
  );
};

describe('ContentPaneProvider', () => {
  test('changing state should work', () => {
    render(
      <ContentPaneProvider>
        <TestComponent />
      </ContentPaneProvider>,
    );

    const state = screen.getByTitle('state');

    expect(state.textContent).toEqual(ContentPageState.NONE.toString());
    userEvents.click(screen.getByRole('button'));
    expect(state.textContent).toEqual(ContentPageState.RESULTS.toString());
  });

  test('should set NONE state when new state is the same as old', () => {
    render(
      <ContentPaneProvider>
        <TestComponent />
      </ContentPaneProvider>,
    );

    const state = screen.getByTitle('state');
    const button = screen.getByRole('button');

    expect(state.textContent).toEqual(ContentPageState.NONE.toString());
    userEvents.click(button);
    expect(state.textContent).toEqual(ContentPageState.RESULTS.toString());
    userEvents.click(button);
    expect(state.textContent).toEqual(ContentPageState.NONE.toString());
  });

  test("useCurrentPaneState should throw an error when it's not used inside provider", () => {
    const { result } = renderHook(() => useCurrentPaneState());

    expect(result.error).toBeDefined();
  });

  test("useChangeCurrentPaneState should throw an error when it's not used inside provider", () => {
    const { result } = renderHook(() => useChangeCurrentPaneState());

    expect(result.error).toBeDefined();
  });
});
