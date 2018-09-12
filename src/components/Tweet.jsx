import React from 'react';
import PropTypes from 'prop-types';
import TheDeets from './TheDeets';

let mainFeed = {
  background: 'white',

  // height: "400px",
  width: '600px',
  marginTop: '40px',
  marginLeft: 'auto',
  marginRight: 'auto'
};
let handle = {
  borderBottom: 'solid',
  paddingLeft: '10px'
};
let bodyTweet = {
  marginLeft: '30px',
  marginRgiht: '30px'
};


function Tweet(props){

  return (
    <div>

      <div style={mainFeed}>


        <div style={handle}>
          <div style={bodyTweet}>
            <h4>Twitter @{props.handle}</h4>
            <p>{props.tweet}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  handle: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,

};

export default Tweet;
