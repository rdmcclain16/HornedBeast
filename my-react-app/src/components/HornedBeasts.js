import React from 'react';

function HornedBeasts({image_url, title, description}){
  return(
    <>
      <h2>
        {title}
      </h2>
      <img height="500px" src={image_url} alt="Bird" title="Bird"/>
      <p>{description}</p>
    </>
  );
}

export default HornedBeasts;
