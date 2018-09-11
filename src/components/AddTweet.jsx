import React from 'react';
import PropTypes from 'prop-types';

function AddTweet(props){
  let _handle = null;
  let _tweet = null;

  function newTweetFormSubmission(event){
    event.preventDefault();

    props.onNewTweetCreation({handle: _handle.value, tweet: _tweet.value});

    _handle.value = '';
    _tweet.value = '';
  }

  return (
    <div>
      <form onSubmit={newTweetFormSubmission}>
        <input
          type="text"
          id='handle'
          placeholder='handle'
          ref={(input) => {_handle = input;}}/>
        <textarea
          id='tweet'
          placeholder='tweet'
          ref={(textarea) => {_tweet = textarea;}}/>


        <button type="submit">Post</button>
      </form>
    </div>
  );
}

AddTweet.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default AddTweet;
