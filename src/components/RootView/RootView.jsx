import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeView, NamespaceView } from 'components';

function RootView() {
  return (
    <div className={'RootView'}>
      <BrowserRouter>
        <Route path={'/'} exact component={HomeView} />
        <Route path={'/:namespaceId'} component={NamespaceView} />
      </BrowserRouter>
    </div>
  );
}

export default hot(RootView);
