import React from 'react';

function HornedBeasts(props){
  return(
    <>
      <h2>
        {props.title}
      </h2>
      <img height="500px" src={props.imgurl} alt="Bird" title="Bird"/>
      <p>{props.desc}</p>
    </>
  );
}

export default HornedBeasts;
