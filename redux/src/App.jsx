import React from 'react';
import FDReduxManager from './components/FDReduxManager';
import RDReduxManager from './components/RDReduxManager';
import NotificationComponent from './components/NotificationComponent';

const App = () => {
  return (
    <div>
      <h1>FD/RD Redux Tracker</h1>
      <FDReduxManager />
      <RDReduxManager />
      <NotificationComponent />
    </div>
  );
};

export default App;
