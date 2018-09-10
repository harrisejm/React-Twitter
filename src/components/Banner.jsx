import React from 'react';
import banner from '../assets/banner.jpeg';

let mainBanner = {
  backgroundImage: `url(${banner})`,
  height: '300px'
};

function Banner(){
  return(
    <div style={mainBanner}>

    </div>
  );
}

export default Banner;
