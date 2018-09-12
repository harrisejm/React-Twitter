import React from 'react';
import TheDeets from './TheDeets';
import AddTweet from './AddTweet';
import PropTypes from 'prop-types';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';



function Feed(props){
  return(
    <div>
      <div>
        <Link to="/newtweet">Post Tweet</Link>
      </div>
      {props.feed.map((post, index) =>
        <div>
          <Tweet handle={post.handle}
            tweet={post.tweet}
            key={index}/>
        </div>
      )}






    </div>

  );
}

Feed.propTypes = {
  feed: PropTypes.array
};

export default Feed;
