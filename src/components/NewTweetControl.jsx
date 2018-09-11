import React from 'react';
import PropTypes from 'prop-types';
import ConfirmTwitter from './ConfirmTwitter';
import AddTweet from './AddTweet';

class NewTweetControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleShowTwitterForm = this.handleShowTwitterForm.bind(this);
  }

  handleShowTwitterForm(){
    this.setState({formVisibleOnPage: true});
  }


  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <AddTweet onNewTweetCreation={this.props.onNewTweetCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmTwitter onShowTwitterForm={this.handleShowTwitterForm}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
};
export default NewTweetControl;
