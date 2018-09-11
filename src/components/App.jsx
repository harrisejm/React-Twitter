import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Feed from './Feed';
import NewTweetControl from './NewTweetControl';
//import PropTypes from 'prop-types';

let background = {
  backgroundColor: '#dbe4f0',
  height: '1000px',

};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTwitterList: []
    };
    this.handleAddingNewTheTwitter = this.handleAddingNewTheTwitter.bind(this);
  }

  handleAddingNewTheTwitter(newTheTwitter) {
    let newMasterTwitterList = this.state.masterTwitterList.slice();
    newMasterTwitterList.push(newTheTwitter);
    this.setState({ masterTwitterList: newMasterTwitterList });

  }

  render() {

    return (
      <div style={background}>
        <Header />
        <Banner />
        <Switch>
          <Route exact path='/' render={()=><Feed feed={this.state.masterTwitterList} />} />
          <Route path='/newtweet' render={()=><NewTweetControl onNewTweetCreation={this.handleAddingNewTheTwitter} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
