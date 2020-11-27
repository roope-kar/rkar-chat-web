import React from 'react';
import { cleanup, render } from '@testing-library/react';
import {HomeView } from 'components';

describe('HomeView', () => {
  
  afterEach(cleanup);

  test('renders the component with a className "HomeView"', () => {
    const component = render(<HomeView />);
    expect(component.container.querySelector('.HomeView')).toBeTruthy();
  });

});
