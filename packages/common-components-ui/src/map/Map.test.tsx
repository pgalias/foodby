import React from 'react';
import { render } from '@testing-library/react';
import { Map, Marker } from '.';

describe('Map', () => {
  const location = {
    latitude: 54.414792427759004,
    longitude: 18.569411429474155,
  };

  test('should be a facade for the "outside" map component', () => {
    const Marker1 = () => <Marker center={location}>Foo</Marker>;
    const Marker2 = () => (
      <Marker
        center={{
          latitude: location.latitude + 0.02,
          longitude: location.longitude + 0.01,
        }}
      >
        Bar
      </Marker>
    );

    const { asFragment } = render(
      <Map center={location} zoom={13}>
        <Marker1 />
        <Marker2 />
      </Map>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
