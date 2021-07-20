import React from 'react';
import Bird from '../img/kingfisher-2046453_1920.jpg';

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
