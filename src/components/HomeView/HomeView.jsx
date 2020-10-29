import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomeView() {
  const history = useHistory();
  const [namespace, setNamespace] = React.useState('');
  const handleChange = React.useCallback((event) => setNamespace(event.target.value), []);
  const handleKeyUp = React.useCallback((event) => {
    if (event.keyCode === 13) {
      history.replace(`/${namespace}`);
    }
  });
  return (
    <div className={'HomeView'}>
      <div className={'HomeView-input-container'}>
        <h2 className={'HomeView-input-heading'}>Enter your namespace here!</h2>
        <input
          className={'HomeView-input'}
          value={namespace}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoFocus
          placeholder={'Epic Wroom Wroom'}
        />
      </div>
    </div>
  );
}
