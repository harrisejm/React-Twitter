import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
