import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { RestaurantContactInfo } from './RestaurantContactInfo';

describe('RestaurantContactInfo', () => {
  const spanRole = 'presentation';
  const linkRole = 'link';

  test('should render contact info with plain text when isLink prop is falsy', () => {
    render(
      <RestaurantContactInfo iconName="compass" label="Label" value="Value" />,
    );
    expect(screen.queryByRole(spanRole)).toBeInTheDocument();
    expect(screen.queryByRole(linkRole)).not.toBeInTheDocument();
  });

  test('should render contact info with link when isLink prop is truthy', () => {
    render(
      <RestaurantContactInfo
        iconName="compass"
        label="Label"
        value="Value"
        isLink
        link="https://google.com"
      />,
    );
    expect(screen.queryByRole(spanRole)).not.toBeInTheDocument();
    expect(screen.queryByRole(linkRole)).toBeInTheDocument();
  });
});
