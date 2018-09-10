import React from 'react';
import TheDeets from './TheDeets'

let mainFeed = {
  border: "solid",
  height: "400px",
  width: "300px",
  marginTop: "40px",
  marginLeft: "auto",
  marginRight: "auto"
}
let bio = {
  borderBottom: "solid",
  paddingLeft: "10px"
}

function Feed(){
  return(
    <div>
      <div style={mainFeed}>
        <div style={bio}>
         <h4>Eddie Harris</h4>
        </div>
      </div>
      <div style={mainFeed}>
        <div style={bio}>
         <h4>James the TWEET Hanley</h4>
        </div>
        <TheDeets />
      </div>
    </div>


  )

}
export default Feed;
