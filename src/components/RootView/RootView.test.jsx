import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { RootView } from 'components';

describe('RootView', () => {
  
  afterEach(cleanup);

  test('renders the component with a className "RootView"', () => {
    const component = render(<RootView />);
    expect(component.container.querySelector('.RootView')).toBeTruthy();
  });

});
