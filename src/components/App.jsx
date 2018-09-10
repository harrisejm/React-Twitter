import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Feed from './Feed';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Switch>
       <Route exact path='/' component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
