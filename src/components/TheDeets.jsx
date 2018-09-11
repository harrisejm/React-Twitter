import React from 'react';

let boxes = {
  paddingLeft: '20px',
  paddingRight: '20px',
  color: 'green'
};

function TheDeets(){

  return(
    <div>
      <tr>
        <td style={boxes}>
          <p>replies</p>
        </td>
        <td style={boxes}>
          <p>likes</p>
        </td>
        <td style={boxes}>
          <p>retweets</p>
        </td>

      </tr>

    </div>
  );
}
export default TheDeets;
