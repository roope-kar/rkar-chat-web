import React from 'react';
import { render } from 'react-dom';
import { RootView } from 'src/components';

if (module.hot) {
  module.hot.accept();
}

render(<RootView />, document.getElementById('app'));
