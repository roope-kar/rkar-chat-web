import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  
  afterEach(cleanup);

  test('renders the component with a className "App"', () => {
    const component = render(<App />);
    expect(component.container.querySelector('.App')).not.toBe(undefined);
  });

});
