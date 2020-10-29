import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NamespaceView } from 'components';

describe('NamespaceView', () => {
  
  afterEach(cleanup);

  test('renders the component with a className "NamespaceView"', () => {
    const component = render(<NamespaceView />);
    expect(component.container.querySelector('.NamespaceView')).toBeTruthy();
  });

});
