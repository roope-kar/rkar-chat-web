import React from 'react';
import { HomeView } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('HomeView', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container: Element = render(<HomeView />).container;

    expect(container).toBeDefined;
  });
});
