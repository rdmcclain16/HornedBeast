import React from 'react';
const { useState } = React;

function HornedBeasts({image_url, title, description}){
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const [counter, setCounter] = useState(0);

  return(
    <>
      <h2>
        {title}
      </h2>
      <img height="500px" src={image_url} alt="Bird" title="Bird"/>
      <p>{description}</p>
      <button onClick={handleClick}>Favorite {counter}</button>
    </>
  );
}

export default HornedBeasts;
