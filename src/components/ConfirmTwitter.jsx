import React from 'react';
import PropTypes from 'prop-types';

function ConfirmTwitter(props) {
  return(
    <div>
      <button onClick={props.onShowTwitterForm}>Yes</button>
    </div>

  );
}
ConfirmTwitter.propTypes={
  onShowTwitterForm: PropTypes.func
};

export default ConfirmTwitter;
