import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
// import { devices } from './mocks/devices';
// import { repairs } from './mocks/repair';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      // devices={devices}
      // repairs={repairs}
    />
  </React.StrictMode>
);
