import React from 'react';
import PropTypes from 'prop-types';
import { WithRouter, Redirect } from 'react-router-dom';

function AddTweet(props){

  let _handle = null;
  let _tweet = null;
  function coolRedirectTest(event){
    event.preventDefault();
    return <Redirect to='/'/>;
  }

  function newTweetFormSubmission(event){
    event.preventDefault();
    if(_handle.value === null || _handle.value === ""){
      _handle.value = 'SwaggiboiEddie';
    }
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
