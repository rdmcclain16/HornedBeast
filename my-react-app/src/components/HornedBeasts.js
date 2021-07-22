import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
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
      <button><img onClick={handleClick} height="500px" width="500px" src={image_url} alt="Bird"></img>
        <BsFillHeartFill/>
        {counter}
      </button>
      <p>{description}</p>
    </>
  );
}

export default HornedBeasts;
